import React, { MouseEventHandler, MouseEvent } from 'react'
import { withAuthModal } from '../Modals/Auth'
import { useAuth } from 'src/utils/auth'

type Props = {
  children: any
  onClick: MouseEventHandler<HTMLButtonElement>
  openAuthModal: Function
  className: string
}

const PrivateButton = ({ children, onClick, openAuthModal, className }: Props) => {

  // Check if user exists
  const { currentUser } = useAuth();

  const onClickHandler = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    if (currentUser) {
      onClick(e);
    } else {
      openAuthModal(onClick);
    }
  }

  return (
    <button onClick={onClickHandler} className={className}>
      {children}
    </button>
  )
}

export default withAuthModal(PrivateButton)

PrivateButton.defaultProps = {
  onClick: () => {
    console.log("default on click");
  },
  className: ""
}