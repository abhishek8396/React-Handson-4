import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Student from './Component/Student';
import Navbar from './Component/Navbar';
import Error from './Component/Error';
import AddNewStudent from './Component/AddNewStudent';
import UpdateDetail from './Component/UpdateDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Student' element={<Student/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='AddNewStudent' element={<AddNewStudent/>}/>
        <Route path='UpdateDetail' element={<UpdateDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
