import React from 'react'
import { Box, Typography } from '@mui/material'
import { SignIn } from '@clerk/nextjs'

function login(){
  return(
        <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{textAlign: 'center'}} className='w-screen h-screen'
    >
      <SignIn fallbackRedirectUrl="/dashboard" forceRedirectUrl={'/dashboard'}/>
    </Box>
  )
  

}

export default login;