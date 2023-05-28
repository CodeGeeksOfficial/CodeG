import React, {useState, useEffect, useContext, createContext} from 'react';
import firebaseAuth from '../firebase/firebase.config'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { apiCall } from 'src/core/api-requests/axios';

const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
      await signInWithPopup(firebaseAuth,provider).then(async (result)=>{
        const user = result.user
        apiCall({
          key:"update_user",
          data: {
            // TODO: create User Class and send proper objects
            uuid: user?.uid,
            name: user?.displayName,
            email: user?.email,
            photoURL:user?.photoURL
          },
        })
      }).catch((error)=>{
        console.log(error)
      })
  }
  function logOut() {
    firebaseAuth.signOut()
  }

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
      // console.log('Auth state changed')
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signInWithGoogle,
    logOut
  }

  return (
    <authContext.Provider value={value}>
      { !loading && children }
    </authContext.Provider>
  )

}

export const useAuth = () => {
  return useContext(authContext);
};