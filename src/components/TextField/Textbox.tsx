import { TextField, Typography } from '@mui/material';
import React from 'react';
import './Textbox.css';

type TextboxType = {
  name: string;
};

export function Textbox({ name, ...props }: TextboxType) {
  return (
    <div className='textbox-div'>
      <Typography className='textbox-label'>{name}</Typography>
      <TextField variant='outlined' size='small' {...props} />
    </div>
  );
}
