const axios = require('axios').default;

const API_URL ='https://restcountries.com/v3.1'

/*getting All countries from api
-------------------------------START----------------------------*/
export const getAllCountries = async() =>{
    const response = await axios.get(`${API_URL}/all`)
    return response
}
/*------------------------------END-----------------------------*/

    /*getting countries by region
-------------------------------START----------------------------*/
export  const getCountriesByRegion = async(region) =>{
    const response = await axios.get(`${API_URL}/region/${region}`)
   return response;
    }
/*------------------------------END-----------------------------*/

    /*getting countries by name/id
-------------------------------START----------------------------*/
export  const getCountryByName = async(country)=>{
        const response =await axios.get(`${API_URL}/name/${country}`)
       return response
    }

  
/*------------------------------END-----------------------------*/