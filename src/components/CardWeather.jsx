import axios from 'axios'
import React, { useEffect, useState} from 'react'
import LoadingScreen from './LoadingScreen'

const CardWeather = ({lat,lon,setType}) => {


const [weather,setWeather] =useState()
const [grades, setGrades] = useState()//temperature
const [isCelsius, setIsCelsius] = useState(true)
const [isLoading, setIsLoading] = useState(true)

// los hooks van siempre fuera 
useEffect(()=>{
if(lat && lat){
    const APIKey = 'a08105a0dcdfecedc86ed1b221974c9e'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`

    axios.get(URL)
        .then(res=>{
          setWeather(res.data)
          const temp = {
            celsius: `${Math.round(res.data.main.temp - 273.15)} °C`,
            fahrenheit: `${Math.round((res.data.main.temp - 273.15)*(9/5)+32)} °F`
          }
          setGrades(temp)
          setIsLoading(false)
        })
        .catch(err=>console.log(err))
}
}, [lat,lon])
console.log(weather?.weather[0])
//console.log(weather?.weather[0].main);
setType(weather?.weather[0].main);

const handleGrades = () =>setIsCelsius(!isCelsius)

if(isLoading){
  return <LoadingScreen/>
}else {
  return (
    <article className='card'>
      <h1>Weather APP</h1>
      <h2>{`${weather?.name}, ${weather?.sys.country} `}</h2>    
      <h3>"{weather?.weather[0].description}"</h3>

      <div className='data'>

        <div>
          <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon" />
        </div>

        <div>
          <ul>
            <li><span>Wind Speed: </span> {weather?.wind.speed} m/s</li>
            <li><span>Clouds: </span>{weather?.clouds.all} %</li>
            <li><span>Pressure: </span>{weather?.main.pressure} hPa</li>
          </ul>
        </div> 

      </div>
      <h2 className='temp'>{isCelsius ? grades?.celsius: grades?.fahrenheit}</h2>
      <button onClick={handleGrades}>{isCelsius ? 'to °F': 'to °C'}</button>
      
    </article>
  )
}
//http://openweathermap.org/img/wn/10d@2x.png

}

export default CardWeather
