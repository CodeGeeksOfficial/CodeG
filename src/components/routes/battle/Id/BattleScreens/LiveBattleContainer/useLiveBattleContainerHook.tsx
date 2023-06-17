import { doc, getFirestore, onSnapshot } from 'firebase/firestore'
import router from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiCall } from 'src/core/api-requests/axios'
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
        const usersData = (battle.usersData) || {};
        let newUsersData: any = {};

        await Promise.all(docData.activeUsers.map(async (userId: any) => {
          if (usersData[userId]) {
            newUsersData[userId] = usersData[userId]
          } else {
            const userData = (await apiCall({ key: "get_details_by_id", params: { user_id: userId } }) as any).data
            newUsersData[userId] = userData;
          }
        }));

        dispatch(setCurrentBattleState({
          ...docData,
          id: doc.id,
          status: (battle && battle.status) ? battle.status : (docData.startedAt ? "arena" : "lobby"),
          usersData: newUsersData,
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
