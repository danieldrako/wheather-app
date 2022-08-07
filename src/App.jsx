import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardWeather from './components/CardWeather'
// los hooks van siempre fuera, siempre serán en el scope raiz del componente 
function App() {
  

  
  const [coords, setCoords] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [type, setType] = useState('')

  useEffect(() => {

    const success = pos =>{
      const latlon = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(latlon);
    }
    navigator.geolocation.getCurrentPosition(success)
  
  }, [])

console.log(type);

  return (
    <div className="App">
      <h1>the time is {type}</h1>
      <CardWeather lon={coords?.lon} lat = {coords?.lat} setType= {setType}/>
    </div>
  )
}

export default App
