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

      <div className='main'>

        <video src="src/assets/video/rain.mp4" autoPlay loop muted ></video>
        <div className='content'>
          <h1>the time is {type}</h1>
          <CardWeather 
            lon={coords?.lon} 
            lat = {coords?.lat}   
            setType= {setType}/>
        </div>

      </div>

    </div>
  )
}

export default App
