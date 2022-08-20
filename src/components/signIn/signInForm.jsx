import { useState, useContext } from "react";
import { SignInUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase-config";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../context/UserContext.";
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = ({ errorMsg }) => {
  // console.log("signin",UserContext);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { currentUser } = useContext(UserContext);

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
      await signInWithGooglePopup();
      console.log("Signned in with Google");
    } catch (error) {
      errorMsg(error);
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