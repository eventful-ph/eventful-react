import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import './Textbox.css';

interface ITextboxProps {
  label?: string;
  name?: string;
  value?: string | Date;
  defaultValue?: string;
  onChange?: (v: any) => any;
  InputProps?: any;
  sx?: any;
}

export default function Textbox(
  {
    label,
    name,
    value,
    defaultValue,
    onChange = () => {},
    sx,
    InputProps,
  }: ITextboxProps,
  ...props: any
) {
  return (
    <div className='textbox-div'>
      <Typography className='textbox-label'>{label}</Typography>
      <TextField
        variant='outlined'
        size='small'
        sx={sx}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e?.target?.value)}
        InputProps={InputProps}
        {...props}
      />
    </div>
  );
}

// export function UploadTextbox(
//   { label, name, value, onChange = () => {}, sx, InputProps }: ITextboxProps,
//   ...props: any
// ) {
//   return (
//     <div className='textbox-div'>
//       <Typography className='textbox-label'>{label}</Typography>
//       <FormControl>
//         <OutlinedInput size='small' defaultValue='Valid ID' />
//         <InputAdornment InputProps={InputProps} />
//       </FormControl>
//     </div>
//   );
// }
