import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase-config.js';
import { useState } from 'react';

const SignIn = () => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const {user} = response;
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      SignIn Component
      <br />
      <br />
      <button onClick={logGoogleUser} 
      style={{backgroundColor:"teal", borderRadius:"10px", padding:"10px",width:"100px"}}
      >Sign-In</button>
    </div>
  )
}

export default SignIn;