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
        <div className='mainTextDiv'>
          <Typography className='reg-as-vendor' variant='h3'>
            Register as a vendor
          </Typography>
          <Typography
            sx={{ fontWeight: 600, color: '#5F5F5F' }}
            variant='subtitle1'
          >
            Connect with more customers
          </Typography>
        </div>

        <Card sx={{ minWidth: 512, minHeight: 462, textAlign: 'left' }}>
          <CardContent>
            <div className='vendor-form-div'>
              <div className='tell-us-div'>
                <Typography className='tell-us-font'>
                  Tell us about yourself
                </Typography>
                <Typography
                  // sx={{ fontSize: 14 }}
                  className='tell-us-caption'
                  // color='text.secondary'
                  gutterBottom
                >
                  Briefly tell what this card can do for the user
                </Typography>
              </div>

              <Stack component='form' spacing={2} noValidate autoComplete='off'>
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
                <Button variant='contained'>Next</Button>
              </Stack>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default VendorScreen;
