import { Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';

export default function Footer() {
  return (
    <Paper
      sx={{
        borderTop: '1px solid #E4E4E4',
        backgroundColor: '#F5F6F8',
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
        />
        <Typography
          className='caption-bold'
          sx={{ color: '#5F5F5F', marginRight: '24px' }}
        >
          Terms and Conditions
        </Typography>
        <Typography className='caption-bold' sx={{ color: '#5F5F5F' }}>
          Privacy Policy
        </Typography>
        <Typography
          color='primary'
          className='caption-bold'
          sx={{ marginLeft: 'auto' }}
        >
          Be a eventful vendor
        </Typography>
      </Container>
    </Paper>
  );
}
