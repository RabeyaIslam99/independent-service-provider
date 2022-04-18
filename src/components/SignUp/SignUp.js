import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {

   
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');

    const [error,setError]= useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handlleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }

    if(user){
      navigate('/shop');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your password is ')
            return
        }
       else if(password.length <6){
            setError('password must be 6 character')

            return
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
         <form onSubmit={handleCreateUser} action="">
         <div>
          <h1 className='form-title'>Sign up</h1>
           <div className='input-group'>
           <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name='email' required />
           </div>
           <div className="input-group">
               <label htmlFor="password">Password</label>
               <input onBlur={handlePasswordBlur} type="password" name='password' required/>
           </div>
           <div className="input-group">
               <label htmlFor="confirm-password"> Confirm Password</label>
               <input onBlur={handlleConfirmPasswordBlur}   type="password" name='password' required />
           </div>
           <p>{error}</p>
           <input className='form-submit' type="submit" value="Login" required/>
          </div>
          <p>
            All ready have an account ?  <Link className='form-link' to='/login'>Log In</Link>
         </p>
         </form>

      
        </div>
    );
};

export default SignUp;