import React, { useState } from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import './countries.css';




const countries = ({countriesPromise}) => {


const[visitedcountry,setvisitedcountry]=useState([]);


const visitedcountryhandler =(countrie)=>{
  console.log('bal',countrie);
   setvisitedcountry([...visitedcountry, countrie]); 
}


  const countriesData = use(countriesPromise);
  const countries=countriesData.countries;
  return (
    <div>
      <h1>Hello world: {countries.length}</h1>
      <h2>Visited country: {visitedcountry.length}</h2>
      <ol>
        {
          visitedcountry.map(Country=><li>{Country.name.common}key={countrie.cca3.cca3}</li>)
        }
      </ol>
      <div className='countries'>
        {
        countries.map(countrie =><Country key={countrie.cca3.cca3} countrie={countrie} visitedcountryhandler={visitedcountryhandler}>  </Country>)
      }
      </div>
    </div>
  );
};

export default countries;