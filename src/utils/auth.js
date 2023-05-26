import React, {useState, useEffect, useContext, createContext} from 'react';
import firebaseAuth from '../firebase/firebase.config'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
      const result = signInWithPopup(firebaseAuth,provider);
      return result
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