import React, {useState, useEffect, useContext} from 'react';
import detailsContext from './DetailsContext';

export default function PokeDetails() {

    // use a context provider
    const {details, setDetails} = useContext(detailsContext);

    return (
        <>
            {/* this is a button that resets the details state to an empty object */}
            <button onClick={() => setDetails({})}>GO HOME</button>

            {/* this displays the image from the details object in a div container  */}
            <div>
                <h3>{details.name}</h3>
                <img src={details.sprites.front_default} alt={details.name}/>
            </div>

            {/* this loops through the moves to turn them into <li> elements */}
            <div>
                <ul>
                    {details.moves.map(move => <li>{move.move.name}</li>)}
                </ul>
            </div>
        </>
    );
}