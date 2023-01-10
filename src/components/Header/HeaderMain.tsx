import React from 'react';
import { Button } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import './HeaderMain.css';

function HeaderMain() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='transparent' className='header' position='static'>
        <Toolbar>
          <Typography component='div' sx={{ flexGrow: 1 }}>
            <img
              src={require('../../assets/images/eventful-logo.png')}
              alt='Eventful'
            />
          </Typography>
          <div className='headerDivider'>
            <p style={{ marginRight: '32px' }}>Be a vendor 🥳</p>
          </div>
          <Button style={{ marginRight: '32px' }} variant='contained'>
            Sign Up
          </Button>
          <p style={{ marginRight: '20px' }}>or</p>
          <Button variant='text'>Log in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderMain;
