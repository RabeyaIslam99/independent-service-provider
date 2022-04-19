import React, { useState } from 'react';
import {  getAuth,  sendSignInLinkToEmail} from 'firebase/auth';
import { Link } from 'react-router-dom';

const EmailVerifications = () => {

    const [email, setEmail] = useState("");
    const auth = getAuth();
const onChangeHandler = (event) => {
    event.preventDefault();
    const {
        value
    } = event.target;
    setEmail(value);
};
const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };
const sendEmailLink = (event) => {
    event.preventDefault();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
};
    return (
        <div>
            <h1>Email</h1>
            <input type="email" name="email" id="email" placeholder="Email address" value={email} onChange={onChangeHandler} />

<button onClick={sendEmailLink}> Confirm </button>
<div>
<p>
            All ready have an account ?  <Link className='form-link' to='/login'>Log In</Link>
         </p>
</div>
        </div>
    );
};

export default EmailVerifications;