import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
    
      <h1>welcome</h1>
      <input placeholder='Email'></input><br></br>
      <input placeholder='password'type='password'></input>
      <br>
      </br>
      <button>login</button>
      <Typography variant='h1'>welcome </Typography>
      <TextField label='email'varient='outlined'/>
      <TextField label='password' type='password' varient='filled' />
      <br></br>
       <Button varient='contained' color='primary' >login</Button>
    </div>
  
  )
}

export default Login
