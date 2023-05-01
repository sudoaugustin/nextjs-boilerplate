import * as Yup from 'yup';

export default {
  ...Yup,
  name: Yup.string().min(2, 'Minium length is 2').max(20, 'Maximum length is 20'),

  code: Yup.string().matches(/^\d+$/, 'Enter only numbers').length(6, 'Incomplete code'),

  file: ({ size = 5, types = [] }: { size: number; types: string[] }) => {
    const TYPES = types.map((type) => type.split('/')[1].toUpperCase()).join(', ');
    return Yup.mixed<File>()
      .test('file-type', `Upload only ${TYPES}`, (file) => (file ? types.includes(file.type) : true))
      .test('file-size', `File size should be less than ${size}MB`, (file) => (file ? file.size / 1024 / 1024 <= size : true));
  },

  email: Yup.string().email('Invalid email'),
  password: Yup.string().min(8, 'Minium length is 8').max(30, 'Maximum length is 30'),
};

//   phone: Yup.string().test('is-phone', 'Invalid phone no', (value) => (value ? isValidPhoneNumber(value) : true)),
