import React from 'react'
import { LoaderWithThreeDots } from '../Loaders/LoaderWthThreeDots'

type Props = {
  className: string
  loaderColor: string
  loading: boolean
  children: any
  onClick: any
}

const Button = ({ className, children, loading, loaderColor, onClick }: Props) => {
  return (
    <button disabled={loading} className={className} onClick={onClick}>
      {loading ? <LoaderWithThreeDots color={loaderColor} /> : children}
    </button>
  )
}

export default Button

Button.defaultProps = {
  className: "",
  loaderColor: "#00ffc3",
  loading: false,
  onClick: () => { }
}