import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';

import './VendorScreen.css';
import { Stack } from '@mui/system';
import Textbox from './TextField/Textbox';
import Footer from './Footer/Footer';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

function VendorScreen() {
  const [formData, setFormData] = useState<any>({
    firstName: '',
    lastName: '',
    contactNo: '+63',
    birthDate: null,
  });
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
                  <Textbox
                    label='First Name'
                    value={formData.firstName}
                    onChange={(v) => setFormData({ ...formData, firstName: v })}
                  />
                  <Textbox
                    label='Last Name'
                    value={formData.lastName}
                    onChange={(v) => setFormData({ ...formData, lastName: v })}
                  />
                  <Textbox
                    label='Contact Number'
                    value={formData.contactNo}
                    onChange={(v) => setFormData({ ...formData, contactNo: v })}
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label='Birthdate'
                      value={formData.birthDate}
                      onChange={(v) =>
                        setFormData({ ...formData, birthDate: v })
                      }
                      renderInput={(params: any) => <Textbox {...params} />}
                    />
                  </LocalizationProvider>

                  <Button variant='contained'>Next</Button>
                </Stack>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VendorScreen;
