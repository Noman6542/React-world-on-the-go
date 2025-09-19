import React, { useState } from 'react';
import './country.css';
const Country = ({countrie,visitedcountryhandler}) => {
  console.log(countrie);
  const [visited,setvisited]=useState(false);
  const handler =()=>{
  setvisited(!visited);
    visitedcountryhandler(countrie);
  }
  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <h1>Name: {countrie.name.common} </h1>
      <img src={countrie.flags.flags.png} alt={countrie.flags.flags.alt}/>
      <h2>Area: {countrie.area.area} {countrie.area.area >300000? 'Big country':'Small country'} </h2>
      <h2>Population: {countrie.population.population}</h2>
      <button onClick={handler}>{visited?'visited':'Not visited'}</button>
    </div>
  );
};

export default Country;