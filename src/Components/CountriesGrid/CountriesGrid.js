import { Link } from "react-router-dom";
import classes from './CountriesGrid.module.css'


const CountriesGrid = ({countries}) => {
   

  return (
    <div className={classes.gridContainer}>
       {countries && countries.map((country)=> <Link to={`/${country.name.common}`} 
       className={classes.link}
        key={country.name.official}>
        <div className={classes.card}>
            <div className={classes.flag}>
                <img src={country.flags.svg} alt={country.name.official}/>
            </div>
             <div className={classes.countryDescriptions}>
                <h4>{country.name.official}</h4>
                <p>population:{country.population}</p>
                <p>Region:{country.region}</p>
                <p>Capital:{country.capital ? country.capital[0] : country.name.official }</p>
             </div>
        </div>
       
       </Link>) }
    </div>
  )
}

export default CountriesGrid