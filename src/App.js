import './App.css'
import { YOUR_APP_ID, YOUR_APP_KEY } from './key'
import Axios from 'axios'

function App() {
  let url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`

  async function getRecipes() {
    let result = await Axios.get(url)
    console.log(result.data)
  }
  return (
    <div className="App">
      <h1 onClick={getRecipes}>Hello Rishabh</h1>
    </div>
  )
}

export default App
