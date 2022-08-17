import React, {useState, useEffect} from 'react';

import './App.css';
import CountriesGrid from './Components/CountriesGrid/CountriesGrid';
import Header from './Components/Header/Header';
import SearchFilter from './Components/SearchFilter/SearchFilter';
import Spinner from './Components/UI/Spinner/Spinner';
import { getAllCountries, getCountriesByRegion, getCountryByName } from './Data/apis';

function App() {
const [searchInput, setSearchInput] =useState('')
const [selectedInput, setSelectedInput] = useState('')
const [countries, setCountries] = useState(null)

  /*getting data for all countries from api
-------------------------------START----------------------------*/
   
useEffect(()=>{
  const fetchCountries = async() =>{
    const response = await getAllCountries();
     const {data} = response;
     setCountries(data && data)
  }
  fetchCountries()
},[getAllCountries])
/*------------------------------END-----------------------------*/

  /*getting countries by country name
-------------------------------START----------------------------*/
useEffect(()=>{
  const fetchCountries = async(country) =>{
    const response = country && await getCountryByName(country);
     const {data} = response;
     setCountries(data && data)
  }
  fetchCountries(searchInput)
},[getCountryByName,searchInput])
/*------------------------------END-----------------------------*/

  /*get countries by region
-------------------------------START----------------------------*/
useEffect(()=>{
  const fetchCountries = async(region) =>{
    const response = region && await getCountriesByRegion(region);
     const {data} = response;
     setCountries(data && data)
  }
  fetchCountries(selectedInput)
},[getCountriesByRegion, selectedInput])
/*------------------------------END-----------------------------*/


const onSearchInputHandler=(countryName)=>{
  setSearchInput(countryName)
}

const onSelectedInputhandler=(selectedRegion)=>{
  setSelectedInput(selectedRegion)
}

console.log(searchInput);
console.log(selectedInput);

  return (
    <div className="App">
     <Header/>
     <SearchFilter onSearch={onSearchInputHandler} onSelect={onSelectedInputhandler}/>
    {(countries === null || countries=== undefined) ?  <Spinner/> : <CountriesGrid countries={countries}/>}
    </div>
  );
}

export default App;
