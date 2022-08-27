import { useState, useContext, useEffect } from "react";
import { auth, SignInUserWithEmailAndPassword, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase-config";
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASS} from "../button/button.component";
import { useSelector } from "react-redux";
import {SignInContainer, BtnContainer } from './sign-in-form.styles';
import { userSelector } from "../../store/user/user.selector";
import { getRedirectResult } from "firebase/auth";

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = ({ errorMsg }) => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const  currentUser  = useSelector(userSelector);

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const submitHandle = async (e) => {
    e.preventDefault();

    if (currentUser) {
      alert("Already authenticated!");
      return;
    }

    try {
      await SignInUserWithEmailAndPassword(email, password);
      setFormFields(defaultFormFields);
    } catch (error) {
      errorMsg(error);
    }
  }

  const loginGoogle = async () => {

    if (currentUser) {
      alert("Already authenticated!");
      return;
    }

    try {
      await signInWithGoogleRedirect();
      console.log("Signned in with Google");
    } catch (error) {
      errorMsg(error);
    }
  }

  return (
    <SignInContainer>
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

        <BtnContainer>
          <Button type='submit' ><span>SIGN IN</span></Button>
          <Button type='button' onClick={loginGoogle} buttonType={BUTTON_TYPE_CLASS.google}><span>Google sign in</span></Button>
        </BtnContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm;