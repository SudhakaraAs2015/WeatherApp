import axios from 'axios';
import React, { useState } from 'react'

const AppWeather = () => {
  const [city, setCity]=useState("")
  const [weatherData,setweatherData] =useState("")
  const [error,setError]=useState("")
  const apiKey= "3e1d1611b6bee16d6976c6513330e654";
  const inputHandler=(e)=>{
    setCity(e.target.value)
    setError("")
  }
const btnHandler=()=>{
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
.then((res)=>{

  let MT = Math.round(res.data.main.temp);
     let FL = Math.round(res.data.main.feels_like)
     let weatherInfo={
      location:`Weather in ${res.data.name}`,
      Temparature: `${MT} C°`,
      FeelsLike : `${FL} C°`,
      Humidity: `${res.data.main.humidity} % `,
      WindSpeed: ` ${res.data.wind.speed} km/h `,
      Clouds: `${res.data.clouds.all}`,
      Information:`${res.data.weather[0].description}`
     } 
     setweatherData(weatherInfo)
    }).catch((err)=>{
  console.log(err);
  setError("Please Enter Valid Location")
})
setweatherData("")
setCity("")

}
  return (
    <div className='app'>
      <div className='all'>
      <div className='search'>
      <input type="texr" placeholder='Enter Location' onChange={inputHandler} value={city}></input>
      </div>
      <button className='btn' onClick={btnHandler}>Search</button>
      </div>
      { weatherData && (
    <div className='container'>
      <div className='top'>
        <div className='location'>
          <p>{weatherData.location}</p>
        </div>
        <div className='temp'>
          <h1>{weatherData.Temparature}</h1>
        </div>
        <div className='description'>
          <p>{weatherData.Information}</p>
        </div>
      </div>
      <div className='bottom'>
        <div className='feels'>
          <p className='bold'>{weatherData.FeelsLike}</p>
          <p>Feels Like</p>
        </div>
        <div className='humidity'>
          <p className='bold'>{weatherData.Humidity}</p>
          <p>Humidity</p>
        </div>
        <div className='wind'>
          <p className='bold'>{weatherData.WindSpeed}</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
      )
}
{error && <p className='errormsg'>{error}</p>}
    </div>
  )
}

export default AppWeather;