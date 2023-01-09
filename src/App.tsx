import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='transparent' className='header' position='static'>
        <Toolbar>
          {/* <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          <Typography component='div' sx={{ flexGrow: 1 }}>
            <img src={require('./images/eventful.png')} alt='Eventful' />
          </Typography>

          <p>Be a vendor 🥳</p>
          <Button variant='contained'>Sign Up</Button>
          <p>or</p>
          <Button variant='text'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;
