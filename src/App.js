
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Banner from './components/Home/Banner/Banner';
import Header from './components/Shared/Header/Header';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Appointment from './components/Appointment/Appointment';
import AuthProvider from './contexts/AuthProvider';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <AuthProvider>
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
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        

        
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
