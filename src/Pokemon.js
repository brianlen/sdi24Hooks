import React, {useState, useEffect, useContext} from 'react';
import detailsContext from './DetailsContext';

export default function Pokemon({value}){
  const [pokeData, setPokeData] = useState({})
  const [sprite, setSprite] = useState('')
  
  const {setDetails, details} = useContext(detailsContext)
  useEffect(() => {
    fetch(value.url)
      .then(res => res.json())
      .then(data => {
        setPokeData(data)
        setSprite(data.sprites.other.dream_world.front_default)
      })
    }, [])
  
  const handleClick = () => {
    setDetails(pokeData)
  }
  
  if(!pokeData) return <h1>Loading...</h1>
 
  return(
    <div className="individualPokemon" onClick={handleClick}>
        <h4>{value.name}</h4>
        <img height="100px" src={sprite} alt={value.name}/>
    </div>
  )
}
