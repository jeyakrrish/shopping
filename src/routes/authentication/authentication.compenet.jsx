import SignInForm from '../../components/signIn/sign-in-form.component';
import SignUpForm from '../../components/signup/sign-up-form.component';
import './authentication.styles.scss';

const Authentication = () => {
  const errorMsg = (error) => {
    if (!error) return;
    switch (error.code) {
      case "auth/network-request-failed" || "auth/internal-error":
        alert("Check your network connection");
        break;
      case 'auth/user-not-found':
        alert("No user associated with this email");
        break;
      case 'auth/wrong-password':
        alert("Wrong password");
        break;
      case "auth/email-already-in-use":
        alert('Can not create user, email already in use');
        break;
      default:
        console.log('user creation encountered an error', error);
    }
  }

  return (
    <div className='authentication-container'>
      <SignInForm errorMsg={errorMsg} />
      <SignUpForm errorMsg={errorMsg} />
    </div>
  )
}

export default Authentication;