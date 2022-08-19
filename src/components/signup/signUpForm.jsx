import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase-config';
import FormInput from '../form-input/form-input.component';
import './signupform.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {          //component

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    // new concept !!!
    setFormFields({ ...formFields, [name]: value });  //Object notation !!!
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("entered passwords not matching");
      return;
    }

    try {

      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      const userDocRef = await createUserDocumentFromAuth(user, { displayName });
      console.log(userDocRef);

      setFormFields(defaultFormFields);
    } catch (error) {

      if (error.code === 'auth/email-already-in-use') {
        alert('Can not create user, email already in use');
        setFormFields(defaultFormFields);
      } else {
        console.log('user creation encountered an error', error);
      }

    }
  }

  return (
    <div className='sign-up-container'>
      <h1>Don't have an account?</h1>
      <span>Sign up with your email and password</span>
      <form onSubmit={onHandleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName}
          required
        />

        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          name='email'
          value={email.toLocaleLowerCase()}
          required
        />

        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
          required
        />

        <FormInput
          label='Confirm password'
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          required
        />

        <Button type='submit'><span>SIGN UP</span></Button>
      </form>
    </div>
  )
}

export default SignUpForm;