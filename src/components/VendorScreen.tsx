import React, { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

import './VendorScreen.css';
import { Stack } from '@mui/system';
import Textbox from './TextField/Textbox';
import Footer from './Footer/Footer';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

type VendorPage1Type = {
  formData: any;
  setFormData: (v: any) => void;
  setPage?: (page: number) => void;
};

const VendorSignupPage1 = ({
  formData,
  setFormData,
  setPage = () => {},
}: VendorPage1Type) => {
  return (
    <Card sx={{ minWidth: 512, minHeight: 462, textAlign: 'left' }}>
      <CardContent>
        <div className='vendor-form-div'>
          <div className='tell-us-div'>
            <Typography className='tell-us-font'>
              Tell us about yourself
            </Typography>
            <Typography className='tell-us-caption' gutterBottom>
              Briefly tell what this card can do for the user
            </Typography>
          </div>

          <Stack component='form' spacing={2} noValidate autoComplete='off'>
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
                onChange={(v) => setFormData({ ...formData, birthDate: v })}
                renderInput={(params: any) => <Textbox {...params} />}
              />
            </LocalizationProvider>
            <Button variant='contained' onClick={() => setPage(2)}>
              Next
            </Button>
          </Stack>
        </div>
      </CardContent>
    </Card>
  );
};

const VendorSignupPage2 = ({
  formData,
  setFormData,
  setPage = () => {},
}: VendorPage1Type) => {
  return (
    <Card sx={{ minWidth: 512, minHeight: 462, textAlign: 'left' }}>
      <CardContent>
        <div className='vendor-form-div'>
          <div className='tell-us-div'>
            <Typography className='tell-us-font'>
              What do you offer your customers?
            </Typography>
            <Typography className='tell-us-caption' gutterBottom>
              Briefly tell what this card can do for the user
            </Typography>
          </div>

          <Stack component='form' spacing={2} noValidate autoComplete='off'>
            <Textbox
              label='First Name'
              value={formData.businessName}
              onChange={(v) => setFormData({ ...formData, businessName: v })}
            />
            <Textbox
              label='Select which applies to your business'
              value={formData.businessCategory}
              onChange={(v) =>
                setFormData({ ...formData, businessCategory: v })
              }
            />
            <Textbox
              label='Office Location'
              value={formData.officeLocation}
              onChange={(v) => setFormData({ ...formData, officeLocation: v })}
            />
          </Stack>
          <Button variant='contained' onClick={() => setPage(1)}>
            Back
          </Button>
          <Button variant='contained'>Next</Button>
        </div>
      </CardContent>
    </Card>
  );
};

function VendorScreen() {
  const [formData, setFormData] = useState<any>({
    firstName: '',
    lastName: '',
    contactNo: '+63',
    birthDate: null,
    businessName: '',
    businessCategory: '',
    officeLocation: '',
  });
  const [page, setPage] = useState<number>(1);
  return (
    <>
      <div className='mainVendorDiv'>
        <div>
          <img
            className='event-logo'
            src={require('../assets/images/eventful-logo-232.png')}
            alt='Eventful'
          />
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
          {page === 1 && (
            <VendorSignupPage1
              formData={formData}
              setFormData={setFormData}
              setPage={setPage}
            />
          )}
          {page === 2 && (
            <VendorSignupPage2
              formData={formData}
              setFormData={setFormData}
              setPage={setPage}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VendorScreen;
