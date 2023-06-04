import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from "react";
import Image from 'next/image';
import LoginBlackCross from "src/lib/assets/icons/LoginBlackCross.png";

type CommonModal = {
  isOpen:boolean,
  onClose: any,
  className: string,
  children: JSX.Element
}

const CommonModal = ({isOpen,onClose,className,children}: CommonModal) => {
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
              className={`${className} relative inline-block align-top bg-[#1E1F25] sm:rounded-lg sm:w-[480px] sm:h-[380px] w-full h-full text-left overflow-hidden shadow-xl transform transition-all`}
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
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default CommonModal