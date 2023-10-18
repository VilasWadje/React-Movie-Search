import React from 'react'

function Search( props) {
    function inputValue(e){
        props.setInputValue(e.target.value)
        console.log(e.target.value);
    }
  return (
    <div className='search'>
        <input  type='search' onChange={inputValue} placeholder='Search for Movie Title...'></input>
    </div>
  )
}

export default Search;