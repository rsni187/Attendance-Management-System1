import React from 'react'
import SearchIcon from './icons/SearchIcon'

const Search = ({wrapperClass,handle,placeholder}) => {
  return (
    <form onSubmit={handle} className={`input-group ${wrapperClass}`}>
      <label htmlFor={`search`} className='d-none' style={{'display':"none"}}>
            Search
      </label>
      <input type='text' name={`search`} id={`search`} placeholder={placeholder} className='form-control'/>
      <button type='submit' className='input-group-text'>
        <SearchIcon />
      </button>
    </form>
  )
}

export default Search