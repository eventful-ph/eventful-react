import * as yup from 'yup';
import { validateContactNumber } from '../../common';

const vendorSignupSchema = yup.object().shape({
  firstName: yup
    .string()
    .label('First Name')
    .when('page', { is: 1, then: yup.string().max(255).required() }),
  lastName: yup
    .string()
    .label('Last Name')
    .when('page', { is: 1, then: yup.string().max(255).required() }),
  contactNo: yup
    .string()
    .label('Contact No')
    .when('page', {
      is: 1,
      then: yup
        .string()
        .max(255)
        .test('', (v: any) => validateContactNumber(v))
        .required(),
    }),
  birthDate: yup.mixed().label('Birthdate').when('page', {
    is: 1,
    then: yup.mixed().required(),
  }),
  businessName: yup
    .string()
    .label('Business Name')
    .when('page', { is: 2, then: yup.string().max(255).required() }),
  officeLocation: yup
    .string()
    .label('Office Location')
    .when('page', { is: 2, then: yup.string().max(255).required() }),
  validIdName: yup
    .string()
    .label('Valid ID')
    .when('page', {
      is: 3,
      then: yup
        .string()
        .test(
          '',
          (v) => `${v.label} file is required`,
          (v: any) => v === 'Valid ID' || v!
        )
        .max(255)
        .required(),
    }),
  businessPermitName: yup
    .string()
    .label('Business Permit')
    .when('page', {
      is: 3,
      then: yup
        .string()
        .test(
          '',
          (v) => `${v.label} file is required`,
          (v: any) => v === 'Business Permit' || v!
        )
        .max(255)
        .required(),
    }),
});

export default vendorSignupSchema;
