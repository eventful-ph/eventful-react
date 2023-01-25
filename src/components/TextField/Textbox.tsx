import { TextField, Typography } from '@mui/material';
import React from 'react';
import './Textbox.css';

type TextboxType = {
  label?: string;
  name?: string;
  value?: string | Date;
  onChange?: (v: any) => any;
  InputProps?: any;
};

export default function Textbox(
  { label, name, value, onChange = () => {}, InputProps }: TextboxType,
  ...props: any
) {
  return (
    <div className='textbox-div'>
      <Typography className='textbox-label'>{label}</Typography>
      <TextField
        variant='outlined'
        size='small'
        value={value}
        onChange={(e) => onChange(e?.target?.value)}
        InputProps={InputProps}
        {...props}
      />
    </div>
  );
}
