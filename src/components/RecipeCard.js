import React, {useState} from 'react'

function RecipeCard({recipe}) {
  //flip state
  const [isFlipped, setFlip] = useState(false)
  //2. favorite/unfavorite state
  const [isFavorite, setFavorite] = useState(true)



  //2. click event to toggle between favorite and unfavorite
  function handleFavoriteClick(e){
  //UPDATE state to reflect the opposite of its current state
  setFavorite(!isFavorite)
  }



  //click event for card flip
  function handleClick(e){
    setFlip(!isFlipped)
  }
  

    let healthLabelString = recipe.recipe.healthLabels
    if(typeof healthLabelString === "object") {recipe.recipe.healthLabels.join(', ')}
    let ingredientString = recipe.recipe.ingredientLines
    if(typeof ingredientString === "object") {recipe.recipe.ingredientLines.join(', ')}

    let recipeImage = ""
    recipe.recipe.images === undefined ? recipeImage = recipe.recipe.image : recipeImage = recipe.recipe.images.SMALL.url



  return (
    
    <li className="card" onClick={(e) => handleClick(e)}>
       {/*ternary to toggle favorite/unfavorite*/}
       {isFavorite ? (
          <button 
          className="emoji-button favorite active" 
          onClick={(e) => handleFavoriteClick(e)}>★</button>
        ) : (
          <button 
          className="emoji-button favorite" 
          onClick={(e) => handleFavoriteClick(e)}>☆</button>
        )}
      {
        isFlipped ?
        (<>
        <h4 className="recipe-title-side-2" >{recipe.recipe.label}</h4>
          <p>Ingredients: {ingredientString}</p>
          <br></br>
          <p>Health Labels: {healthLabelString}</p>
        </>)
        :
        (<>
          <h4 className="recipe-title-side-1" >{recipe.recipe.label}</h4>
          <img className="recipe-image" src={recipeImage} alt={recipe.recipe.label} />
        </>)
      }
      
  </li>
  )
}


export default RecipeCard

//SIDE 1
//recipe name........ label
//recipe image..... images.THUMBNAIL.url
//recipe button 
//favorites icon

//SIDE 2
//ingredients
//health labels


//STEP 2 Conditionally Render image v. recipe