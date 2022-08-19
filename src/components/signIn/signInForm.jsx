import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import { createUserDocumentFromAuth, SignInUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase-config";
import Button from "../button/button.component";
import { getRedirectResult } from "firebase/auth";
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const { user } = await SignInUserWithEmailAndPassword(email, password);
      const userDocRef = await createUserDocumentFromAuth(user);
      console.log("Signned In", userDocRef);
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert("No user associated with this email");
          break;
        case 'auth/wrong-password':
          alert("Wrong password");
          break;
        default:
          console.log(error);
      }
    }
  }

  const loginGoogle = async () => {

    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
      console.log("Signned in with Google", userDocRef);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='sign-in-container'>
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandle}>
        <FormInput
          label='email'
          type='email'
          name='email'
          onChange={changeHandle}
          value={email.toLocaleLowerCase()}
          required
        />

        <FormInput
          label='Password'
          type='password'
          name='password'
          onChange={changeHandle}
          value={password}
          required
        />

        <div className="btn-container">
          <Button type='submit'><span>SIGN IN</span></Button>
          <Button type='button' onClick={loginGoogle} buttonType="google"><span>Google sign in</span></Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;