import React from 'react'
import Box from '@mui/material/Box';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar> 

           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
            <Link to="/"style={{color:'white,',textDecoration:'none'}}>
                News</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/login" style={{color:'white',textDecoration:'none'}}>Login</Link></Button>
          <Button color="inherit">
            <Link to="/signup" style={{color:'white',textDecoration:'none'}}>Signup</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Home
