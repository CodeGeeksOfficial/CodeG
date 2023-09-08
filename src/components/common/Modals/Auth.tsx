import React, { useEffect, useRef } from 'react'
import { useAuth } from 'src/utils/auth';
import { useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
// import LoginModalBackgroundImage from "src/lib/assets/icons/LoginModalBackgroundImage.jpeg";
import LoginModalBackgroundImage from "src/lib/assets/icons/become-a-codie-illustration.png";
import GoogleIcon from 'src/lib/assets/icons/GoogleIcon.svg'
import CommonModal from './CommonModal';

type AuthModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: Function
}

export const AuthModal = ({ isOpen, onClose, onSubmit }: AuthModalProps) => {

  const { signInWithGoogle } = useAuth();

  const onSignUp = async (callbackFn: any = () => { }) => {
    try {
      // let result = await signInWithGoogle()
      onSubmit()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CommonModal
      className='sm:w-[480px] sm:h-[380px]'
      isOpen={isOpen}
      onClose={onClose}
    >
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
            <GoogleIcon className='w-6 h-6' />
            Continue with Google
          </button>
        </div>
      </div>
    </CommonModal>
  );
};

export const withAuthModal = (Component: React.ComponentType<any>) => {
  const ComponentToReturn = (props: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const callbackFnRef = useRef(() => { });

    const onOpenWithCallback = (callbackFn: any = () => { }) => {
      callbackFnRef.current = callbackFn;
      onOpen();
    }

    const customOnClose = () => {
      onClose();
      callbackFnRef.current();
    }

    return (
      <>
        <AuthModal isOpen={isOpen} onClose={onClose} onSubmit={customOnClose} />
        <Component openAuthModal={onOpenWithCallback} {...props} />
      </>
    );
  };
  return ComponentToReturn;
}

export const withFullScreenAuth = (Component: React.ComponentType<any>) => {
  const ComponentToReturn2 = (props: any) => {
    const { onClose } = useDisclosure();
    const { signInWithGoogle, currentUser } = useAuth();

    return (
      <>
        {currentUser ?
          <Component {...props} />
          :
          <div className='w-screen h-screen bg-[#141519f1]'>
            <AuthModal isOpen={true} onClose={() => { }} onSubmit={() => { }} />
          </div>
        }
      </>
    );
  };
  return ComponentToReturn2;
}