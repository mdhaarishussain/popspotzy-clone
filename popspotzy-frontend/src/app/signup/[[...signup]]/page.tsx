import React from 'react'
import { SignUp } from '@clerk/nextjs'
import { Box } from '@mui/material'

function signup() {
  return (
        <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{textAlign: 'center'}} className='w-screen h-screen'
    >
      <SignUp fallbackRedirectUrl='/signin' forceRedirectUrl='/signin' />
    </Box>
  )
}

export default signup;