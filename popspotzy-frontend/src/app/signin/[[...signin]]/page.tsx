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
      <Typography variant="h4" component="h1" gutterBottom>
        Sign In
      </Typography>
      <SignIn fallbackRedirectUrl="/dashboard" forceRedirectUrl={'/dashboard'}/>
    </Box>
  )
  

}

export default login;