import React, {useState} from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import Layout from './Components/Layout';

import { ThemeContext } from './context/DarkMode';



function App() {

const [theme, setTheme] = useState('light');

const themeHandler=()=>{
  setTheme(theme==='light' ? 'dark' : 'light')
}
  return (
   <BrowserRouter>
      <ThemeContext.Provider value={{theme, themeHandler}}>
        <Layout/>
      </ThemeContext.Provider>
   </BrowserRouter>
  );
}

export default App;
