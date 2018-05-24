import Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  password: Yup.string()
    .required('Password is required'),
});

/** Now apply this schema.... */
<form>
  <input name="email" type="email" required />
  <input name="password" type="password" required />
</form>
