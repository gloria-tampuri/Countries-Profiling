import React, {useContext} from 'react'
import {
 
    Routes,
    Route,
  } from "react-router-dom";
import Country from '../Components/Country/Country';
import Header from '../Components/Header/Header';
import Home from '../Components/Home';
import { ThemeContext } from '../context/DarkMode';

const Layout = () => {

    const theme = useContext(ThemeContext)

    console.log(theme);

  return (
    <div className={theme.theme}>
        <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:countryName' element={<Country/>}/>
      </Routes>
    </div>
  )
}

export default Layout