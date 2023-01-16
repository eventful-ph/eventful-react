import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';

import './VendorScreen.css';
import { maxHeight, Stack } from '@mui/system';
import { Textbox } from './TextField/Textbox';

function VendorScreen() {
  return (
    <>
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

                <Stack
                  component='form'
                  spacing={2}
                  noValidate
                  autoComplete='off'
                >
                  <Textbox name='First Name' />
                  <Textbox name='Last Name' />
                  <Textbox name='Contact Number' />
                  <Textbox name='Birthday' />
                  <Button variant='contained'>Next</Button>
                </Stack>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Paper
        sx={{
          borderTop: '1px solid #E4E4E4',
          backgroundColor: '#F5F6F8',
          // display: 'flex',
        }}
        component='footer'
        square
        variant='outlined'
      >
        <Container
          maxWidth='xl'
          sx={{
            width: '100%',
            display: 'flex',
            minHeight: '96px',
            alignItems: 'center',
          }}
        >
          <Typography className='caption-bold' sx={{ marginRight: '24px' }}>
            Eventful © 2023
          </Typography>{' '}
          <div
            style={{
              width: 0,
              height: 16,
              border: '1px solid #5F5F5F',
              marginRight: '24px',
            }}
          ></div>
          <Typography
            className='caption-bold'
            sx={{ color: '#5F5F5F', marginRight: '24px' }}
          >
            Terms and Conditions
          </Typography>
          <Typography className='caption-bold' sx={{ color: '#5F5F5F' }}>
            Privacy Policy
          </Typography>
        </Container>
      </Paper>
    </>
  );
}

export default VendorScreen;
