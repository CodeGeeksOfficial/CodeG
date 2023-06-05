import React, { useEffect, useState } from 'react'
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  isOpen:boolean
}

const FullScreenLoader = ({isOpen}: Props) => {

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpen}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default FullScreenLoader