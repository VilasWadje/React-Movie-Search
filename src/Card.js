import React from 'react'
import { useState } from 'react';

function Card(props) {

  const [isMouseOver,setIsMouseOver]=useState(false);

  function MouseOver(){
    // e.target.style.display="block";
    setIsMouseOver(true);
  }
  function MouseOut(){
    setIsMouseOver(false);
   }
  return (
    <div onMouseOver={MouseOver} onMouseOut={MouseOut} className='card'>
        <img className='poster' src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.posterImg}`} alt='poster'></img>
        <div className='title' ><p className={isMouseOver?"active" : "inActive"
      }>{props.title}</p></div>
    </div>
  )
}

export default Card;