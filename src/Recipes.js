import React from 'react'
import './App.css';

function Recipes({label, image, calories}) {
  return (
    <div className='item2'>
        <h5>{label}</h5>
       <div>{calories}</div>
       <img src={image} alt="pic" />
    </div>
  )
}

export default Recipes
