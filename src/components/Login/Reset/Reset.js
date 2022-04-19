import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import {  sendPasswordResetEmail} from 'firebase/auth';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';
const Reset = () => {

    const [email, setEmail] = useState("");

const onChangeHandler = (event) => {
    event.preventDefault();
    const {
        value
    } = event.target;
    setEmail(value);
};
const sendResetLinkHandler = (event) => {
    event.preventDefault();
 console.log(event)
    auth
        .sendPasswordResetEmail(email)
        .then(() => {
            Toast.success(
                "Password reset link sent, please check your email inbox."
            );
            setEmail("");
        })
        .catch((err) => {
            Toast.error(err.message);
        });
};
    return (
        <div>
            <h1>Reset</h1>
            <input type="email" name="email" id="email" placeholder="Email address" value={email} onChange={onChangeHandler} />

<button onClick={sendResetLinkHandler}> Confirm </button>
<p>
            All ready have an account ?  <Link className='form-link' to='/login'>Log In</Link>
         </p>
        </div>
    );
};

export default Reset;