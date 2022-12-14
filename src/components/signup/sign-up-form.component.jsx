import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase-config';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/user/user.selector';
import {SignUpContainer} from './sign-up-form.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = ({errorMsg}) => {          //component

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const  currentUser  = useSelector(userSelector);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });  //Object notation !!!
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    
    if(currentUser) {
      alert("Already authenticated!");
      return;
    }

    if (password !== confirmPassword) {
      alert("entered passwords not matching");
      return;
    }

    try {
      
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      createUserDocumentFromAuth(user, { displayName });
      console.log("Signed Up with Email and Password");
      setFormFields(defaultFormFields);
  
    } catch (error) {
      errorMsg(error);
    }
  }

  return (
    <SignUpContainer>
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
    </SignUpContainer>
  )
}

export default SignUpForm;