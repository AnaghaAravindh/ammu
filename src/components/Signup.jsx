import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>signup</h1>
      <input placeholder='firstname'></input><br></br>
      <input placeholder='lastname'></input>
      <br>
      </br>
      <input placeholder='email'></input>
      <br></br>
      <input type={'password'} placeholder='password'></input><br></br>
      <Button placeholder='password'>Login</Button>
      
    </div>
  )
}

export default Signup
