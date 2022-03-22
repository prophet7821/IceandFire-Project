/* eslint-disable no-unused-expressions */

import React ,{useState,useEffect} from 'react'
import {readData } from './api/readData';


const App= () => {

  //states
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState()

  //useEffect
  useEffect(() =>{
    readData().then((data)=>{
      setCharacters(data.data);
      console.log(characters);
    })
  },[])

  const handleChange = (e)=>{
      const searchedCharacter = characters.filter((character) => character.fullName.includes(e.target.value))
      setFilteredCharacters(searchedCharacter)
      console.log(searchedCharacter,filteredCharacters);
  }


  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleChange}/>
    </div>
  )
}

export default App;