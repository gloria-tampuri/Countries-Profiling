import React from 'react'
import classes from './Header.module.css'
import {FaMoon} from 'react-icons/fa'

const Header = () => {
  return (
    <div className={classes.header}>
    <div className={classes.forpad}>
    <h1>Where in the world</h1>
     <div className={classes.darkcontrol} >
      <div><FaMoon/></div>  
      <p>Dark Mode</p>
     </div>
    </div>
    </div>
  )
}

export default Header