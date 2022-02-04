import React, { useState } from "react";
import "../../Styles/Weather.css"
import axios from 'axios'



function Weather() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d3d6490e8855971395da8c8e6d7a9447`
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter City Name'
          type="text" />
      </div>
      <div className="container">
        <div className="left">
          <div className="location"> 
            {data.weather ?<p>Location: {data.name}</p>: null}
            {data.weather ? <p>Condition: {data.weather[0].main}</p> : null}
          </div>
          <div className="temp">
            {data.main ? <h1>Temperature: {data.main.temp.toFixed()}°C</h1> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="right">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Weather;