import SignInForm from '../../components/signIn/signInForm';
import SignUpForm from '../../components/signup/signUpForm';
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}

export default Authentication;