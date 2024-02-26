import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

export default function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  // Api key 
  const api_key = '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <div className="weatherapp">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div className="datadisplay">
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: <strong>{weatherData.main.temp}°C</strong></p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
