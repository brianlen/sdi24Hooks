import React, {useState, useEffect, useContext} from 'react';
import detailsContext from './DetailsContext';

export default function PokeDetails(){
  const {details, setDetails} = useContext(detailsContext);

  return(
  <>
    <button onClick={() => setDetails({})}>GO HOME</button>
    <div>
    <h3>{details.name}</h3>
    <img src={details.sprites.front_default}/>
    </div>
    <div>
    <ul>
      {details.moves.map(move => <li>{move.move.name}</li>)}
    </ul>
    </div>
  </>
  )
}