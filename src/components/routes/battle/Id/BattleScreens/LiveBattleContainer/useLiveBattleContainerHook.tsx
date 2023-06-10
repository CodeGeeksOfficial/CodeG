import { doc, getFirestore, onSnapshot } from 'firebase/firestore'
import router from 'next/router'
import React, { useEffect, useState } from 'react'
import { firebaseApp } from 'src/firebase/firebase.config'

const useLiveBattleContainerHook = () => {

  const battleId = router.query.id
  const [battleData, setBattleData] = useState<any>();

  useEffect(() => {
    const db = getFirestore(firebaseApp);
    const battleDocRef = doc(db, "battles", `${battleId}`);
    const unsubscribe = onSnapshot(battleDocRef, async (doc) => {
      let docData = doc.data()
      console.log('docData: ', docData)
      setBattleData(docData);
    })

    return () => {
      console.log("Unsubscribed")
      unsubscribe()
    }

  }, [])


  return { battleData }
}

export default useLiveBattleContainerHook
