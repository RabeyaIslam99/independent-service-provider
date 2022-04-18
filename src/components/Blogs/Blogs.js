import React from 'react';
import Header from '../Shared/Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
        <div style={{marginTop:'100px'}}>
            <h1>Difference between authorization and authentication</h1>
            <p>Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.


            Authorization determines what resources a user can access.
            Authorization works through settings that are implemented and maintained by the organization.
            Authorization always takes place after authentication.
            </p>
            <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p>Firebase Authentication makes building secure sign-ins for any platform easy. This end-to-end solution supports email and passowrd, phone auth,mult-platform login. Build Fast For Any Device.Authorization is a process by which a server determines if the client has permission to use a resource or access a file.
Authorization is usually coupled with authentication so that the server has some concept of who the client is that is requesting access.
The type of authentication required for authorization may vary; passwords may be required in some cases but not in others.
In some cases, there is no authorization; any user may be use a resource or access a file simply by asking for it. Most of the web pages on the Internet require no authentication or authorization.</p>

  <h1> What other services does firebase provide other than authentication</h1>
  <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more</p>
        </div>
        </div>
    );
};

export default Blogs;