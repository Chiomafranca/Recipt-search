import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';

const Api_key = '6825f7460b55e7c8d22e159b1bf53e2e';
const Api_id = '8d7316a3';

const FoodRecipt = () => {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
 const [query, setQuery] =useState("beef")

  useEffect(() =>{
    updateFetch()
  }, [query])

const updateFetch = async () =>{
    const response = await fetch(  `https://api.edamam.com/search?q=${query}&app_id=${Api_id}&app_key=${Api_key}&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data = await response.json()
    console.log(data)
    setRecipes(data.hits)
    setSearch("")
}

const handleSubmit =(e) =>{
      e.preventDefault();
      setQuery(search)
} 

const handleChange = (e) => {
  setSearch(e.target.value);
};


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>

        <div className='items'>
        {recipes.map((recipe) =>(
         <Recipes
         key={recipe.recipe.label}
         label={recipe.recipe.label}
         calories={recipe.recipe.calories}
         image={recipe.recipe.image}
         />
      ))}
        </div>
    </div>
  );
};

export default FoodRecipt;
