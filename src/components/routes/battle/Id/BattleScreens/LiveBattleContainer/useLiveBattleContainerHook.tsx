import { doc, getFirestore, onSnapshot } from 'firebase/firestore'
import router from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentBattleState } from 'src/core/redux/reducers/battleSlice'
import { firebaseApp } from 'src/firebase/firebase.config'

const useLiveBattleContainerHook = () => {

  const battleId = router.query.id
  const dispatch = useDispatch();
  const battle = useSelector((state: any) => state.battle)

  useEffect(() => {
    const db = getFirestore(firebaseApp);
    const battleDocRef = doc(db, "battles", `${battleId}`);
    console.log("Subscribed");
    const unsubscribe = onSnapshot(battleDocRef, async (doc) => {
      let docData = doc.data();

      if (docData) {
        dispatch(setCurrentBattleState({
          ...docData,
          id: doc.id,
          status: (battle && battle.status) ? battle.status : (docData.startedAt ? "arena" : "lobby"),
          createdAt: docData.createdAt.toDate().getTime(),
          startedAt: docData.startedAt ? docData.startedAt.toDate().getTime() : null
        }));
      }
    })

    return () => {
      console.log("Unsubscribed")
      unsubscribe()
    }

  }, [])


  return { battle }
}

export default useLiveBattleContainerHook
