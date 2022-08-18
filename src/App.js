import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Country from './Components/Country/Country';
import Header from './Components/Header/Header';
import Home from './Components/Home';


function App() {


  return (
   <BrowserRouter>
       <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
             <Route path='/country' element={<Country/>}/>
          
         
      </Routes>
   </BrowserRouter>
  );
}

export default App;
