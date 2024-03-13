import React, {useState,useEffect} from 'react';
import Pokemon from "./Pokemon"
import PokeDetails from './PokeDetails';
import detailsContext from './DetailsContext';

function App() {
    // create state for entire list
    const [pokeList, setPokeList] = useState([]);

    // create state for details of one pokemon
    const [details, setDetails] = useState({});

    // store details and setDetails in the DetailsContext
    const value = {details, setDetails};

    // initialize renderComponent JSX item
    let renderComponent;

    // useEffect to fetch 10 pokemon and store in the pokeList state
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(res => res.json())
            .then(data =>{
                setPokeList(data.results);
            })
    }, []);

    // conditional rendering
    if (Object.keys(details).length === 0) { // if details is empty
        if (pokeList.length === 0) { // and if pokeList is empty
             // then render a loading page
            renderComponent = <h1>LOADING....</h1>
        } else { // else pokeList has content
            // then render the pokeList where each pokemon has a name, and value passes in the name and url
            renderComponent = pokeList.map(pokemon => <Pokemon key={pokemon.name} value={pokemon}/>)
        }
    } else { // details has content
        // then render the pokeDetails page
        renderComponent = <PokeDetails details={details}/>
    }

    // return one rendering component
    return (
        <>
            <detailsContext.Provider value={value}>
            {renderComponent}
            </detailsContext.Provider>
        </>
    );

  
}

export default App;