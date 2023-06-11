import React, {useState, useEffect, useContext, createContext} from 'react';
import firebaseAuth from '../firebase/firebase.config'
import { signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo } from 'firebase/auth';
import { apiCall } from 'src/core/api-requests/axios';
import { useKeyboardShortcut } from "src/utils/hooks/useKeyboardShortcut";
const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
      await signInWithPopup(firebaseAuth,provider).then(async (result)=>{
        const user = result.user
        const isNewUser = getAdditionalUserInfo(result).isNewUser
        if(isNewUser){
          console.log('New user: ',user?.displayName);
          apiCall({key:"create_user"})
        }else{
          console.log('Existing user: ',user?.displayName);
          apiCall({
            key:"update_user",
            data: {
              name: user?.displayName,
              email: user?.email,
              photoUrl:user?.photoURL
            },
          })
        }
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

  const copyAccessTokenToClipboard = async () => {
    if(currentUser){
      navigator.clipboard.writeText(currentUser.accessToken)
    }
  }
  useKeyboardShortcut(["shift", "a"], copyAccessTokenToClipboard)

  return (
    <authContext.Provider value={value}>
      { !loading && children }
    </authContext.Provider>
  )

}

export const useAuth = () => {
  return useContext(authContext);
};