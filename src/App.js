
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';

import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Appointment from './components/Appointment/Appointment';

import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import Reset from './components/Login/Reset/Reset';
import Expert from './components/Home/Expert/Expert';
import AboutMe from './components/AboutMe/AboutMe';
import EmailVerifications from './components/Login/EmailVarifications/EmailVerifications';

function App() {
  return (
    <div className="App">
    
    
      <Routes>
    
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/appointed/:serviceId' element={
              <RequireAuth>
                <Appointment></Appointment>
              </RequireAuth>  

        }></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/reset' element={<Reset></Reset>}></Route>
        <Route path='/emailv' element={<EmailVerifications></EmailVerifications>}></Route>
        <Route path='/experts' element={<Expert></Expert>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
        
        

        
      </Routes>
     
    </div>
  );
}

export default App;
