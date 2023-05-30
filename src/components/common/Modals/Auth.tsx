import React from 'react'
import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay,useDisclosure } from '@chakra-ui/react';
import { JsxElement } from 'typescript';
import { useAuth } from 'src/utils/auth';

type AuthModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit?: () => void
  onSignUp: () => void
}

export const AuthModal = ({isOpen, onClose, onSignUp, onSubmit}: AuthModalProps) => {
  // const {handleSubmit, register, errors} = useForm();

  return (
      <Modal isOpen={isOpen} onClose={onClose} size="400px">
          <ModalOverlay />
          <ModalContent borderRadius={4}>
              <ModalCloseButton />
              <ModalBody>
                  <Flex align="center" justify="center">
                    <button
                      onClick={onSignUp}
                    >
                      Sign Up With Google
                    </button>
                      {/* <AuthContent
                          as="form"
                          errors={errors}
                          onSubmit={handleSubmit((data) => onSubmit(data))}
                          px={8}
                          py={12}
                          register={register}
                          spacing={3}
                          type={type}
                          w="100%"
                      /> */}
                  </Flex>
              </ModalBody>
          </ModalContent>
      </Modal>
  );
};

export const withAuthModal = (Component:React.ComponentType<any>) => {const ComponentToReturn = (props:any) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const { signInWithGoogle } = useAuth();

  const logInWithGoogle = async () => {
    try {
      let result = await signInWithGoogle()
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <>
          <AuthModal isOpen={isOpen} onClose={onClose} onSignUp = {logInWithGoogle} />
          <Component openAuthModal={onOpen} {...props} />
      </>
  );
};
return ComponentToReturn;
}