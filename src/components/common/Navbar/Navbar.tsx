import Link from "next/link";
import React, { Fragment } from "react";
import Logo from "src/lib/assets/logo.svg";
import { useAuth } from "src/utils/auth";
import GoogleIcon from 'src/lib/assets/icons/GoogleIcon.svg'
import Avatar from '@mui/material/Avatar';
import { withAuthModal } from "src/components/common/Modals/Auth";
import { Popover, Transition } from "@headlessui/react";

type NavbarProps = {
  openAuthModal?: () => void
};

const settings = [{
  name: 'Logout',
}];


const Navbar = ({openAuthModal}: NavbarProps) => {
  const { signInWithGoogle,currentUser,logOut } = useAuth()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <div className="sticky top-0 z-40 w-screen h-[8vh] bg-[#1E1F25] flex items-center px-4 shadow-zinc-900 shadow-md">
      <Link
        href="/"
        className="text-2xl sm:text-3xl flex font-semibold justify-center items-center lg:justify-start"
      >
        <Logo className="w-8 h-8 mr-2" />
        <span className="text-white">Code</span>
        <span className="text-[#00ffc2]">G</span>
      </Link>
      <div className="flex-grow mx-5">
        
      </div>
      <div className="">
        {currentUser ? 
          <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <Avatar alt="Profile Photo" src={currentUser?.photoURL} />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-2 flex w-screen max-w-[256px] -translate-x-0">
                <div className="w-screen max-w-[256px] flex-auto overflow-hidden rounded-xl bg-[#fbfbfb] text-sm leading-6 shadow-md shadow-black">
                  <div className="p-3">
                    {settings.map((item) => (
                      <div key={item.name} className="group relative flex gap-x-6 rounded-md p-4 hover:bg-[#00ffc2] transition-all">
                        <button
                        onClick={handleSignOut}
                        className="font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          :
          <button 
            className="flex flex-row gap-2 items-center justify-between cursor-pointer px-2 py-2 hover:bg-[#00ffc3] hover:border-[#00ffc3] border rounded-md ease-in duration-100 text-white tracking-wide hover:text-[#303136]"
            onClick={openAuthModal}
          >
            <GoogleIcon className = 'w-6 h-6'/>
            <div className="text-sm sm:text-base">Sign In</div>
          </button>
        }
      </div>
    </div>
  );
};

// export default Navbar
export default withAuthModal(Navbar)