import './App.css'
import { YOUR_APP_ID, YOUR_APP_KEY } from './key'
import Axios from 'axios'
import { useState } from 'react'
import RecipeTile from './RecipeTile'

function App() {
  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])

  let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`

  async function getRecipes() {
    let result = await Axios.get(url)
    setRecipes(result.data.hits)
    console.log(result.data)
  }

  const submitIngredient = (e) => {
    e.preventDefault()
    getRecipes()
  }

  return (
    <div className="app">
      <h1>Food Recipe</h1>
      <form className="app__searchform" onSubmit={submitIngredient}>
        <input
          type="text"
          className="app__input"
          placeholder="Enter ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app__submit" type="submit" placeholder="Search" />
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />
        })}
      </div>
    </div>
  )
}

export default App
