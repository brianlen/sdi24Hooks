import React, {useState, useEffect, useContext} from 'react';
import detailsContext from './DetailsContext';

export default function Pokemon( { value } ) {
    // value is a destructure of the object that contains pokemon name and url

    // create state to store the data for one pokemon
    const [pokeData, setPokeData] = useState({});
    
    // create a state for the sprite URL
    const [sprite, setSprite] = useState('');
  
    // use the details context container
    const {setDetails, details} = useContext(detailsContext);

    // fetch the entire data for one pokemon
    useEffect(() => {
        fetch(value.url)
            .then(res => res.json())
            .then(data => {
                setPokeData(data);  // set the entire pokemon data
                setSprite(data.sprites.other.dream_world.front_default); // set the sprite url
            })
    }, [])
  
    // declare handleClick function to put the pokeData into the detailscontext
    const handleClick = () => {
        setDetails(pokeData);
    }
    
    // if pokeData is empty, then return to the loading page
    if (!pokeData) return <h1>Loading...</h1>
 
    // if pokeData isn't empty, then return a clickable div with a pokemon sprite
    return (
        <div className="individualPokemon" onClick={() => handleClick()}>
            <h4>{value.name}</h4>
            <img height="100px" src={sprite} alt={value.name}/>
        </div>
    )
}
