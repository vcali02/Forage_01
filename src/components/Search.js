import {useState} from 'react'

function Search({search, setSearch, changeRecipes}) {

  const [ApiSearch, setApiSearch] = useState("")
  const [open, setOpen] = useState(false)

  const healthLabelForm = 
    {
      "Vegan" : false,
      "Vegetarian": false,
      "Pescatarian" : false,
      "Mediterranean" : false,
      "Dairy-Free" : false,
      "Egg-Free" : false,
      "Gluten-Free": false,
      "Peanut-Free" : false,
      "Tree-Nut-Free" : false,
      "Soy-Free" : false,
      "Fish-Free" : false,
      "Shellfish-Free" : false,
      "Pork-Free" : false,
      "Red-Meat-Free" : false,
      "Crustacean-Free" : false,
      "Celery-Free" : false,
      "Mustard-Free" : false,
      "Sesame-Free" : false,
      "Lupine-Free" : false,
      "Mollusk-Free" : false,
      "Alcohol-Free" : false,
      "Sulfite-Free" : false,
      "Kosher" : false
    }

  const [labelForm, setLabelForm] = useState(healthLabelForm)



  function handleChange(e){
    setSearch(e.target.value)
  }

  function handleAPIChange(e){
      setApiSearch(e.target.value)
    }

    function handleSubmit(e){
      e.preventDefault()
      let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ApiSearch}&app_id=1b69287b&app_key=3548c1c8ddcced686bdb0bea5fc04678`

      //condition that goes into the form. checks if true for ""free. if true add &health=alcohol-free to url
      if(labelForm['Alcohol-Free']) {url = url + "&health=alcohol-free"}
      if(labelForm['Dairy-Free']) {url = url + "&health=dairy-free"}
      if(labelForm['Gluten-Free']) {url = url + "&health=gluten-free"}
      if(labelForm['Pescatarian']) {url = url + "&health=pescatarian"}
      if(labelForm['Vegan']) {url = url + "&health=vegan"}
      if(labelForm['Vegetarian']) {url = url + "&health=Vegetarian"}
      


      fetch(url)
      .then(resp => resp.json())
      .then(data => changeRecipes(data.hits))
  }

  function handleOpen(){
    setOpen(prev=>!prev)
  }
  
  function handleCheckbox(e){

    setLabelForm({...labelForm, [e.target.name]: (e.target.checked)})
    console.log(labelForm['Dairy-Free'])
    //console.log(e.target.checked)
    
  }

  return (
    <div className="search-box">
      <button className= "advanced-search" onClick={() => handleOpen()}>Advanced Search</button>
    {/* <input 
    value={search}
    type="text" 
    placeholder="filter here"
    onChange={(e) => handleChange(e)} 
    className="search-input-filter"
    /> */}

    

    <input 
    type="text" 
    onChange={(e)=>handleAPIChange(e)} 
    value={ApiSearch} 
    placeholder="search..."
    className="search-input"/>
    <button onClick={(e)=>handleSubmit(e)}
    className="search-button">Search</button>



    {open ? 

    (<ul>
      <ul>
        <label>Dairy-Free
          <input type='checkbox' name="Dairy-Free" checked={labelForm['Dairy-Free']} onChange={(e)=>handleCheckbox(e)}></input>
        </label>
        <label>Gluten-Free
          <input type='checkbox' name="Gluten-Free" checked={labelForm['Gluten-Free']} onChange={(e)=>handleCheckbox(e)}></input>
        </label>
        <label>Vegan  
          <input type='checkbox' name="Vegan" checked={labelForm['Vegan']} onChange={(e)=>handleCheckbox(e)}></input>
        </label>
        <label>Vegetarian
          <input type='checkbox' name="Vegetarian" checked={labelForm['Vegetarian']} onChange={(e)=>handleCheckbox(e)}></input>
        </label>
        <label>Alcohol-Free
          <input type='checkbox' name="Alcohol-Free" checked={labelForm['Alcohol-Free']} onChange={(e)=>handleCheckbox(e)}></input>
        </label>
        <label>Pescatarian
          <input type='checkbox' name="Pescatarian" checked={labelForm['Pescatarian']} onChange={(e)=>handleCheckbox(e)}></input>
        </label>
      </ul>
    </ul>) 

    : null}
    


  </div>
  )
}

export default Search