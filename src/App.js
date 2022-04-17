
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Banner from './components/Home/Banner/Banner';

function App() {
  return (
    <div className="App">
      <h2>Here is header</h2>
      <Banner></Banner>
      <Routes>
    
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
