import React,{useState, useEffect, useCallback} from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import classes from './ACountry.module.css'
import { getCountryByName } from '../../Data/apis'
import Spinner from '../UI/Spinner/Spinner'


const Country = () => {
  let { countryName } = useParams();
  const [country, setCountry] = useState()

  const fetchCountry = useCallback(() =>{
        const fetchCountry = async (country) => {
        const response = await getCountryByName(country);
        const { data } = response;
        setCountry(data && data)
    }
        fetchCountry(countryName)
  },[countryName])

  /*getting countries by country name
  -------------------------------START----------------------------*/
  useEffect(() => {
    fetchCountry()
}, [fetchCountry])
/*------------------------------END-----------------------------*/

if(country === null || country === undefined || country.length < 1){
  return <Spinner />
}

  return (
    <div className={classes.page}>
      <Link to='/'>
        <div className={classes.backButton}>
          <div><BiArrowBack /></div>
          <h4>Back</h4>
        </div>
      </Link>
      {country && country.map((country) => 
      <div key={country.name.common} className={classes.profile}>
        <div className={classes.flag}>
        <img src={country.flags.svg} alt={country.name.official}/>
        </div>

        <div className={classes.details}> 
            <h2>{country.name.official}</h2>

            <div className={classes.dets}>
                <div>
                  <p>Native Name : <span>{country.name.common}</span></p>
                  <p>Population : <span>{country.population}</span></p>
                  <p>Region : <span>{country.region}</span></p>
                  <p>Sub Region : <span>{country.subregion}</span></p>
                  <p>Capital : <span>{country.capital}</span></p>
                </div>

                <div>
                  <p>Independent : <span>{country.independent}</span></p>
                  <p>Fifa : <span>{country.fifa}</span></p>
                  <p>Landlocked : <span>{country.landlocked}</span></p>
                </div>
            </div>

            <div className={classes.borders}> 
            <h4>Border Countries: </h4>
            <ul>
              {country.borders.map((border)=><li key={border}>{border}</li>)}
            </ul>
            </div>
         </div>

           
         
      </div> ) }
      
    </div>
  )
}

export default Country