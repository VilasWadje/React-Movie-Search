import React from 'react';
import './App.css';
import Card from './Card';
import Search from './Search';
import axios from "axios";

import { useEffect,useState } from 'react';

function App() {
  const [popularMoviesData,setpopularMoviesData]=useState([]);
  const [inputValue,setInputValue]=useState("");

  
  useEffect(()=>{
    if(inputValue==""){
      var apiUrl="https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716";
    }else{
      apiUrl=`https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=cfe422613b250f702980a3bbf9e90716`
    }
    axios.get(apiUrl)
    .then((response)=>{
      setpopularMoviesData(response.data.results);
    },[])
    // .catch((error)=>{
    //   console.log(error);
    // })
  },[inputValue])
  
  
  return (
    <div className="container">
      <Search setInputValue={setInputValue}/>
      <div className='cardContainer'>
        {popularMoviesData.map((popularMovie,index)=>{
            return <Card key={index} posterImg={popularMovie.poster_path} title={popularMovie.title} />
        })}
      </div>
    </div>
  );
}

export default App;
