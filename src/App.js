import './App.css'
import { YOUR_APP_ID, YOUR_APP_KEY } from './key'
import Axios from 'axios'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')

  let url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`

  async function getRecipes() {
    let result = await Axios.get(url)
    console.log(result.data)
  }
  return (
    <div className="app">
      <h1>Food Recipe</h1>
      <form className="app__searchform">
        <input
          type="text"
          className="app__input"
          placeholder="Enter ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app__submit" type="submit" placeholder="Search" />
      </form>
    </div>
  )
}

export default App
