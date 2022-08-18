import React, { useState, useEffect } from 'react';
import CountriesGrid from './CountriesGrid/CountriesGrid';
import SearchFilter from './SearchFilter/SearchFilter';
import Spinner from './UI/Spinner/Spinner';
import { getAllCountries, getCountriesByRegion, getCountryByName } from '../Data/apis';

const Home = () => {
    const [searchInput, setSearchInput] = useState('')
    const [selectedInput, setSelectedInput] = useState('')
    const [countries, setCountries] = useState(null)

    /*getting data for all countries from api
  -------------------------------START----------------------------*/

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await getAllCountries();
            const { data } = response;
            setCountries(data && data)
        }
        fetchCountries()
    }, [])
    /*------------------------------END-----------------------------*/

    /*getting countries by country name
  -------------------------------START----------------------------*/
    useEffect(() => {
        const fetchCountries = async (country) => {
            const response = country && await getCountryByName(country);
            const { data } = response;
            setCountries(data && data)
        }
        fetchCountries(searchInput)
    }, [searchInput])
    /*------------------------------END-----------------------------*/

    /*get countries by region
  -------------------------------START----------------------------*/
    useEffect(() => {
        const fetchCountries = async (region) => {
            const response = region && await getCountriesByRegion(region);
            const { data } = response;
            setCountries(data && data)
        }
        fetchCountries(selectedInput)
    }, [selectedInput])
    /*------------------------------END-----------------------------*/


    const onSearchInputHandler = (countryName) => {
        setSearchInput(countryName)
    }

    const onSelectedInputhandler = (selectedRegion) => {
        setSelectedInput(selectedRegion)
    }


    return (
        <div>
            <SearchFilter onSearch={onSearchInputHandler} onSelect={onSelectedInputhandler} />
            {(countries === null || countries === undefined) ? <Spinner /> : <CountriesGrid countries={countries} />}
        </div>
    )
}

export default Home