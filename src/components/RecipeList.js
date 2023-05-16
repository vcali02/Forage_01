import React from 'react'
import RecipeCard from './RecipeCard'
import Search from './Search.js'


//takes the array of recipes as a prop
function RecipeList({recipes, search, setSearch, changeRecipes}) {
  return (
    <>
      <div>
          <Search className="" search={search} setSearch={setSearch} changeRecipes={changeRecipes}/>
      </div>
      <div className="recipe-list">
          
        {
          [...recipes].map((recipe, index) => {
              return <RecipeCard key={index} recipe={recipe} />
          })
        } 
      </div>
    </>
  )
}




export default RecipeList


