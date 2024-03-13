import React, {useState,useEffect} from 'react';
import Pokemon from "./Pokemon"
import PokeDetails from './PokeDetails';
import detailsContext from './DetailsContext';

function App() {
  const [pokeList, setPokeList] = useState([])
  const [details, setDetails] = useState({});
  const value = {details, setDetails};

  let renderComponent;
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(res => res.json())
      .then(data =>{
        setPokeList(data.results);
      })
    }, []
  )

    if(Object.keys(details).length === 0){
    if(pokeList.length === 0){
      renderComponent = <h1>LOADING....</h1>
    }else{
     renderComponent = pokeList.map(pokemon => <Pokemon key={pokemon.name} value={pokemon}/>)
    }
  }else{
    renderComponent = <PokeDetails details={details}/>
  }

  return (
    <>
      <detailsContext.Provider value={value}>
       {renderComponent}
      </detailsContext.Provider>
    </>
  );

  
}

export default App;