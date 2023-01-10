import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';

import './VendorScreen.css';
import { maxHeight, Stack } from '@mui/system';

function VendorScreen() {
  return (
    <div className='mainVendorDiv'>
      <div>
        <img
          className='event-logo'
          src={require('../assets/images/eventful-logo-232.png')}
          alt='Eventful'
        />
        {/* <h3 className='reg-as-vendor'>Register as a vendor</h3>
         */}
        <Typography className='reg-as-vendor' variant='h3'>
          Register as a vendor
        </Typography>
        <Typography variant='subtitle1'>Connect with more customers</Typography>

        <Card sx={{ minWidth: 512, minHeight: 462, textAlign: 'left' }}>
          <CardContent>
            <Typography variant='h6'>Tell us about yourself</Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Briefly tell what this card can do for the user
            </Typography>
            <Stack
              component='form'
              sx={{
                width: '25ch',
              }}
              spacing={2}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='outlined-basic'
                label='First Name'
                variant='outlined'
                size='small'
              />
              <TextField
                id='outlined-basic'
                label='Last Name'
                variant='outlined'
                size='small'
              />
              <TextField
                id='outlined-basic'
                label='Contact Number'
                variant='outlined'
                size='small'
              />
              <TextField
                id='outlined-basic'
                label='Birth date'
                variant='outlined'
                size='small'
              />
            </Stack>
            <Button sx={{ width: 'auto' }} variant='contained'>
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default VendorScreen;
