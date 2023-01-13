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
          width: '100%',
          borderTop: '1px solid #E4E4E4',
          backgroundColor: '#F5F6F8',
          padding: 0,
          minHeight: '96px',
        }}
        component='footer'
        square
        variant='outlined'
      >
        <Container maxWidth='xl'>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              display: 'flex',
              // my: 1,
            }}
          >
            <Link href='/'>TEST</Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              display: 'flex',
              margin: 0,
            }}
          >
            <Typography variant='caption' color='initial'>
              Copyright ©2022. [] Limited
            </Typography>
          </Box>
        </Container>
      </Paper>
    </>
  );
}

export default VendorScreen;
