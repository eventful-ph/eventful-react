import * as yup from 'yup';
import { validateContactNumber } from './common';

const vendorSignupSchema = yup.object().shape({
  firstName: yup.string().label('First Name').required(),
  lastName: yup.string().label('Last Name').required(),
  contactNo: yup
    .string()
    .label('Contact No')
    .test('', (v: any) => validateContactNumber(v))
    .required(),
});

export default vendorSignupSchema;
