import Link from 'next/link'
import React from 'react'
import Logo from 'src/lib/assets/logo.svg'
import ListIcon from 'src/lib/assets/icons/list-icon.svg'
import { useAuth } from 'src/utils/auth'

type Props = {}

const Navbar = (props: Props) => {
  const { signInWithGoogle,currentUser,logOut } = useAuth()
  
  const hangleGoogleLogin = async () => {
    try {
      let result = await signInWithGoogle()
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignOut = () => {
    logOut()
  }

  const getUserDetails = () => {
    console.log(currentUser)
  }

  return (
    <div className='sticky top-0 flex z-40 text-[#00ffc2] bg-[#303136] text-xl py-4 px-4 sm:px-8'>
      <div>
        <ListIcon className="block lg:hidden text-white rotate-180 self-center" />
      </div>
      <div className='flex justify-center lg:justify-between w-full'>
        <ul className='hidden lg:flex gap-4'>
          <button>About</button>
          <button>Team</button>
          <button>Practice</button>
        </ul>

        <Link href="/" className='text-3xl sm:text-4xl flex font-semibold justify-center lg:justify-start'>
          <Logo className="w-10 h-10 mr-2" />
          <span className='text-white'>Code</span><span>G</span>
        </Link>
        <div className='hidden lg:flex gap-2'>
          {currentUser ?
              <button
              className='text-sm text-[#00ffc2] sm:text-base px-4 py-2 rounded-md self-center ease-in duration-100'
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          :
            <button 
              className='text-sm sm:text-base border-[1px] hover:border-[#303136] px-4 py-2 rounded-md self-center hover:bg-[#00ffc3] hover:text-[#303136] ease-in duration-100'
              onClick={hangleGoogleLogin}
            >
              Login
            </button>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar