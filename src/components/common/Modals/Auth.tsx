import React from 'react'
import { useAuth } from 'src/utils/auth';
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
// import LoginModalBackgroundImage from "src/lib/assets/icons/LoginModalBackgroundImage.jpeg";
import LoginModalBackgroundImage from "src/lib/assets/icons/become-a-codie-illustration.png";
import LoginBlackCross from "src/lib/assets/icons/LoginBlackCross.png";
import GoogleIcon from 'src/lib/assets/icons/GoogleIcon.svg'

type AuthModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit?: () => void
  onSignUp: () => void
  className?:string
}

export const AuthModal = ({isOpen, onClose, onSignUp, onSubmit,className}: AuthModalProps) => {

  return (
    <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto"
          onClose={onClose}
        >
          <div className="flex justify-center h-screen items-center sm:p-5">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className={`fixed inset-0 bg-[#000000] bg-opacity-50 transition-opacity`} />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="relative inline-block align-top bg-[#1E1F25] sm:rounded-lg sm:w-[480px] sm:h-[380px] w-full h-full text-left overflow-hidden shadow-xl transform transition-all"
              >
                <button
                  onClick={onClose}
                  className="absolute top-[10px] right-[10px]"
                >
                  <Image
                    src={LoginBlackCross}
                    alt=""
                    width={30}
                    height={30}
                    priority={true}
                  />
                </button>
                <div className="h-full flex flex-col">
                  <Image
                    src={LoginModalBackgroundImage}
                    alt="Login_Icon"
                    height={240}
                    className="flex items-center justify-between w-full object-cover"
                    priority={true}
                  />
                  <div className='sm:py-10 sm:px-[60px]  mb-5 px-6 py-10 flex flex-col justify-between items-center'>
                    <button
                      onClick={onSignUp}
                      className="flex justify-center items-center bg-black text-white py-3 w-full rounded-lg gap-x-3 sm:font-semibold sm:text-base text-sm"
                      >
                      <GoogleIcon className = 'w-6 h-6'/>
                      Continue with Google
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
  );
};

export const withAuthModal = (Component:React.ComponentType<any>) => {const ComponentToReturn = (props:any) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const { signInWithGoogle } = useAuth();

  const logInWithGoogle = async () => {
    try {
      let result = await signInWithGoogle()
      onClose()
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <>
          <AuthModal isOpen={isOpen} onClose={onClose} onSignUp = {logInWithGoogle} className=''/>
          <Component openAuthModal={onOpen} {...props} />
      </>
  );
};
return ComponentToReturn;
}