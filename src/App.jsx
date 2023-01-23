
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './assets/json/quotes.json'
import { QuoteBox } from './components/QuoteBox'
import { useState } from 'react'
import color from './assets/json/Color.json'
function App() {

 console.log(color)
  const ramdomElementFromArray = arr => {
    let nun =  Math.floor(Math.random() * arr.length)
    return arr[nun]
  }
  
  const [random,setRandom] = useState(ramdomElementFromArray(quotes)) 
  const changeElement = () => {
    setRandom(ramdomElementFromArray(quotes))
    setcolorRandom(ramdomElementFromArray(color))
  }
  const [colorRandom,setcolorRandom] = useState(ramdomElementFromArray(color))
  return (
    
    <div style={{backgroundColor: colorRandom}} className="App">
      <QuoteBox random={random} 
      changeElement={changeElement}
      colorRandom={colorRandom}/>
      
    </div>
  )
}

export default App
