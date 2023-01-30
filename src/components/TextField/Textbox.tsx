import React from 'react';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import './Textbox.css';

interface ITextboxProps {
  label?: string;
  name?: string;
  value?: string | Date;
  defaultValue?: string;
  onChange?: (v: any) => any;
  InputProps?: any;
  sx?: any;
  disabled?: boolean;
  textboxDivClass?: any;
}

export default function Textbox(
  {
    label,
    value,
    defaultValue,
    onChange = () => {},
    sx,
    InputProps,
    disabled,
    textboxDivClass = 'textbox-div',
  }: ITextboxProps,
  ...props: any
) {
  return (
    <div className={textboxDivClass}>
      <Typography className='textbox-label'>{label}</Typography>
      <TextField
        variant='outlined'
        size='small'
        sx={sx}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e?.target?.value)}
        InputProps={InputProps}
        disabled={disabled}
        {...props}
      />
    </div>
  );
}

export function UploadTextbox(
  { label, fileId, value, onChange = () => {} }: any,
  ...props: any
) {
  return (
    <Textbox
      textboxDivClass='textbox-div upload-textbox-div'
      disabled
      sx={{ paddingRight: 0 }}
      value={value}
      defaultValue={label}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end' sx={{ paddingRight: 0 }}>
            <input
              accept='image/*'
              id={fileId}
              type='file'
              onChange={onChange}
              hidden
            />
            <label htmlFor={fileId}>
              <Button sx={{ minWidth: 0 }} component='span'>
                View
              </Button>
            </label>
            <Button sx={{ padding: 0, minWidth: 0 }}>
              <img
                src={require('../../assets/images/trash.png')}
                alt='Remove'
              />
            </Button>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
