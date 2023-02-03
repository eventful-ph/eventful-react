import React from 'react';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import { Controller, Control } from 'react-hook-form';
import './Textbox.css';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface ITextboxProps {
  name?: string;
  label?: string;
  control?: Control<any>;
  value?: string | Date;
  defaultValue?: string;
  onChange?: (v: any) => any;
  InputProps?: any;
  sx?: any;
  disabled?: boolean;
  textboxDivClass?: any;
  error?: any;
}

export default function Textbox(
  {
    name = '',
    control,
    label,
    value,
    defaultValue,
    onChange = () => {},
    sx,
    InputProps,
    disabled,
    textboxDivClass = 'textbox-div',
    error,
  }: ITextboxProps,
  ...props: any
) {
  const Field = ({ field, controlError }: any) => (
    <div className={textboxDivClass}>
      <Typography className='textbox-label'>{label}</Typography>
      <TextField
        error={!!controlError}
        variant='outlined'
        size='small'
        sx={sx}
        value={field?.value || value}
        defaultValue={defaultValue}
        onChange={(e) => {
          onChange(e?.target?.value);
          field && field.onChange(e?.target?.value);
        }}
        InputProps={InputProps}
        disabled={disabled}
        {...props}
      />
      <Typography className='error-text' variant='caption'>
        {controlError && controlError.message}
      </Typography>
    </div>
  );

  if (control && name)
    return (
      <Controller
        name={name}
        render={(props) => {
          const {
            field,
            fieldState: { error },
          } = props;
          return <Field field={field} controlError={error} />;
        }}
        control={control}
      />
    );

  return <Field />;
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

export function DateField({
  name,
  label,
  control,
  onChange = () => {},
  ...props
}: any) {
  const Field = ({ field, controlError }: any) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        // {...props}
        label={label}
        value={field.value}
        onChange={(v) => {
          console.log(v, 'v');
          if (!v) return;
          onChange && onChange(v);
          field && field.onChange(v);
        }}
        renderInput={({ inputProps: { value }, ...params }: any) => (
          <Textbox {...params} value={value} />
        )}
      />
    </LocalizationProvider>
  );

  return (
    <Controller
      name={name}
      render={(props) => {
        const {
          field,
          fieldState: { error },
        } = props;
        return <Field field={field} controlError={error} />;
      }}
      control={control}
    />
  );
}
