import React,{useContext} from 'react'
import classes from './Header.module.css'
import {FaMoon} from 'react-icons/fa'
import { ThemeContext } from '../../context/DarkMode'

const Header = () => {
 
  const theme = useContext(ThemeContext)

  return (
    <div className={classes.header}>
    <div className={classes.forpad}>
    <h1>Where in the world</h1>
     <div onClick={theme.themeHandler} className={classes.darkcontrol} >
      <div><FaMoon/></div>  
      <p>Dark Mode</p>
     </div>
    </div>
    </div>
  )
}

export default Header