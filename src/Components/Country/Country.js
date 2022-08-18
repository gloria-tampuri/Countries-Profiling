import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import classes from './ACountry.module.css'


const Country = ({countries}) => {
 
  return (
    <div className={classes.page}>
      <Link to='/'>
        <div className={classes.backButton}>
          <div><BiArrowBack /></div>
          <h4>Back</h4>
        </div>
      </Link>

      <div className={classes.profile}>
        <div className={classes.flag}>
          
        </div>

        <div className={classes.details}> 
            <h2>Belgium</h2>

            <div className={classes.dets}>
                <div>
                  <p>Native Name: </p>
                  <p>Population:</p>
                  <p>Region:</p>
                  <p>Sub Region:</p>
                  <p>Capital:</p>
                </div>

                <div>
                  <p>Top Level Domain:</p>
                  <p>Currency:</p>
                  <p>Language: </p>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Country