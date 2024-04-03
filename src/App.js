import {  Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Singup'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Signup/>} path='/'></Route>
        <Route element={<Home/>} path='/home' ></Route>
        <Route element={<About/>} path='/about' ></Route>
        <Route element={<Contact/>} path='/contact' ></Route>
        <Route element={<Login/>} path='/login'></Route>
      </Routes>
    </div>
    
  );
};

export default App;
