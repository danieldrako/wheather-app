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
let video
console.log(typeof(type));
if(type == "Clouds"){
  video = type
}else if (type == "Rain"){
  video = type
}else if (type == "Snow"){
  video = type
}else if (type == "Drizzle"){
  video = type
}else if (type == "Mist"){
  video = type
}else if (type == "Thunderstorm"){
  video = type
}else {
  video = 'Random'
}
console.log(video)
  return (
    <div className="App">

      <div className='main'>

        <video src={`src/assets/video/${video}.mp4`} autoPlay loop muted ></video>
        <div className='content'>

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
