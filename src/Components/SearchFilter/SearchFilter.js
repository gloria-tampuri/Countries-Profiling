import React,{useState, useEffect} from 'react'
import classes from './SearchFilter.module.css'
import { BiSearchAlt2 } from 'react-icons/bi'



const SearchFilter = ({onSearch, onSelect}) => {
   const [enteredSearch, setEnteredSearch] =useState('')
   const [region, setRegion] = useState('')

   useEffect(()=>{
    onSearch(enteredSearch)
    onSelect(region)
   },[enteredSearch,region])
  
   const onSearchHandler=async(e)=>{
    setEnteredSearch(e.target.value)
   }

   const onSelectedRegion=(e)=>{
    setRegion(e.target.value)
   }

   console.log(region);


  return (
    <div className={classes.searchfilter}>
      <div className={classes.searchdiv}>
        <BiSearchAlt2 className={classes.searchIcon} />

        <input type='search' value={enteredSearch} placeholder='Search for a country...' onChange={onSearchHandler}/>
      </div>

      <div className={classes.filterdiv}>
        <select name="region" id="region-select" value={region} onChange={onSelectedRegion}>
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
          <option value="asia">Asia</option>

        </select>
      </div>

    </div>
  )
}

export default SearchFilter