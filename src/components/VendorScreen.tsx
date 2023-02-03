import React from 'react';
import {
  Button,
  Card,
  CardContent,
  InputAdornment,
  Typography,
} from '@mui/material';
import { useForm, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import './VendorScreen.css';
import { Stack } from '@mui/system';
import Textbox, { DateField, UploadTextbox } from './TextField/Textbox';
import Footer from './Footer/Footer';
import Selectbox from './Select/Selectbox';
import vendorSignupForm from '../utils/formSchema/vendorSignup/VendorSignupForm';
import { useWatch } from 'react-hook-form';

type VendorPage1Type = {
  control?: Control<any>;
  handleSubmit: (h: any, e?: any) => any;
  setValue?: any;
};

const VendorSignupPage1 = ({
  control,
  handleSubmit = () => {},
  setValue,
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
            <Textbox label='First Name' name='firstName' control={control} />
            <Textbox label='Last Name' name='lastName' control={control} />
            <Textbox
              label='Contact Number'
              name='contactNo'
              control={control}
            />
            <DateField name='birthDate' label='Birthdate' control={control} />
            <Button
              variant='contained'
              onClick={() => handleSubmit(() => setValue('page', 2))()}
            >
              Next
            </Button>
          </Stack>
        </div>
      </CardContent>
    </Card>
  );
};

const VendorSignupPage2 = ({
  control,
  handleSubmit,
  setValue,
}: VendorPage1Type) => {
  return (
    <Card
      sx={{
        flex: 1,
        minWidth: 512,
        minHeight: 390,
        textAlign: 'left',
        overflow: 'visible',
      }}
    >
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
              label='Business Name'
              name='businessName'
              control={control}
            />
            <Selectbox label='Select which applies to your business' />
            <Textbox
              label='Office Location'
              name='officeLocation'
              control={control}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img
                      src={require('../assets/images/location-11.png')}
                      alt=''
                    />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ marginLeft: 'auto' }}>
              <Button
                sx={{ mr: 1 }}
                variant='contained'
                color='warning'
                onClick={() => setValue('page', 1)}
              >
                Back
              </Button>
              <Button
                variant='contained'
                onClick={() => handleSubmit(() => setValue('page', 3))()}
              >
                Next
              </Button>
            </div>
          </Stack>
        </div>
      </CardContent>
    </Card>
  );
};

const VendorSignupPage3 = ({
  control,
  handleSubmit,
  setValue,
}: VendorPage1Type) => {
  return (
    <Card
      sx={{
        flex: 1,
        minWidth: 512,
        minHeight: 328,
        textAlign: 'left',
        overflow: 'visible',
      }}
    >
      <CardContent>
        <div className='vendor-form-div'>
          <div className='tell-us-div'>
            <Typography className='tell-us-font'>
              Help us verify your business
            </Typography>
            <Typography className='tell-us-caption' gutterBottom>
              Upload documents that prove your business is legitimate
            </Typography>
          </div>

          <Stack component='form' spacing={2} noValidate autoComplete='off'>
            <UploadTextbox
              label='Valid ID'
              fileId='v-id-file'
              name='validIdName'
              control={control}
              // onChange={(e: any) =>
              //   setFormData({
              //     ...formData,
              //     validIdName: e?.target?.files && e?.target?.files[0].name,
              //     validIdFile: e?.target?.files && e?.target?.files[0],
              //   })
              // }
            />
            <UploadTextbox
              label='Business Permit'
              fileId='bs-permit-file'
              name='businessPermitName'
              control={control}
              // onChange={(e: any) =>
              //   setFormData({
              //     ...formData,
              //     businessPermitName:
              //       e?.target?.files && e?.target?.files[0].name,
              //     businessPermitFile: e?.target?.files && e?.target?.files[0],
              //   })
              // }
            />

            <Textbox
              sx={{ paddingRight: 0 }}
              defaultValue="Mayor's Permit"
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <Button sx={{ minWidth: 0 }}>Upload</Button>
                  </InputAdornment>
                ),
              }}
              disabled
            />
            <div style={{ marginLeft: 'auto' }}>
              <Button
                sx={{ mr: 1 }}
                variant='contained'
                color='warning'
                onClick={() => setValue('page', 2)}
              >
                Back
              </Button>
              <Button
                variant='contained'
                onClick={() => handleSubmit(() => {})()}
              >
                Submit Application
              </Button>
            </div>
          </Stack>
        </div>
      </CardContent>
    </Card>
  );
};

function VendorScreen() {
  const defaultData = {
    firstName: undefined,
    lastName: undefined,
    contactNo: '+63',
    birthDate: null,
    businessName: '',
    businessCategory: '',
    officeLocation: '',
    validIdName: undefined,
    validIdFile: undefined,
    businessPermitName: undefined,
    businessPermitFile: undefined,
    mayorsPermitName: undefined,
    mayorsPermitFile: undefined,
    page: 1,
  };

  const { control, handleSubmit, setValue } = useForm<any>({
    mode: 'all',
    defaultValues: defaultData,
    resolver: yupResolver(vendorSignupForm),
  });

  const page = useWatch({
    control,
    name: 'page',
  });

  return (
    <>
      <div className='mainVendorDiv'>
        <div>
          <img
            className='event-logo'
            src={require('../assets/images/eventful-logo-313-new.png')}
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
              control={control}
              handleSubmit={handleSubmit}
              setValue={setValue}
            />
          )}
          {page === 2 && (
            <VendorSignupPage2
              control={control}
              handleSubmit={handleSubmit}
              setValue={setValue}
            />
          )}
          {page === 3 && (
            <VendorSignupPage3
              control={control}
              handleSubmit={handleSubmit}
              setValue={setValue}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VendorScreen;
