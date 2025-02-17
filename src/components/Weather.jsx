import React, { useEffect, useRef, useState } from 'react'
import search from "../assets/search.png"
import clear from "../assets/clear.png"
import cloud from "../assets/cloud.png"
import drizzle from "../assets/drizzle.png"
import humidity from "../assets/humidity.png"
import rain from "../assets/rain.png"
import snow from "../assets/snow.png"
import wind from "../assets/wind.png"

const Weather = () => {

    const [weatherData, setWeatherData] = useState(false);
    const inputRef = useRef()

    const allIcons = {
        "01d": clear,
        "01n":clear,
        "02d":cloud,
        "02n":cloud,
        "03d":cloud,
        "03n":cloud,
        "04d":drizzle,
        "04n":drizzle,
        "09d":rain,
        "09n":rain,
        "10d":rain,
        "10n":rain,
        "13d":snow,
        "13n":snow,        
    }

    const searchCity = async (city) => {
        if (city === ""){
            alert("Enter City Name");
            return;
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
            const response = await fetch(url);
            const data = await response.json();

            if(!response.ok){
                alert(data.message);
                return;
            }

            console.log(data);

            const icon = allIcons[data.weather[0].icon] || clear;

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon

            })
            
            
        } catch (error) {

            setWeatherData(false);
            console.error("Error in fetching weather data")
            
        }
    }

    useEffect(()=>{
        searchCity("Mombasa")
    },[])

  return (
    <div className='flex flex-col justify-center  items-center sm:w-[50%] sm:m-auto sm:rounded-xl bg-gradient-to-tl from-[#2f4680] to-[#500ae4]' >
        <div className='flex items-center p-4 justify-between gap-2'>
            <input ref={inputRef} className='bg-white px-3 py-1 rounded-full outline-0' type="text" placeholder='Search' />
            <img onClick={() => searchCity(inputRef.current.value)} className='bg-white w-8 h-8 p-2 rounded-full' src={search} alt="" />
        </div>

        {weatherData ? <>
            <img src={weatherData.icon} alt="" />
        <p className='text-white text-5xl'>{weatherData.temperature}&deg;C</p>
        <p className='text-white text-3xl'>{weatherData.location}</p>

        <div className='flex mb-3 mt-2 justify-between gap-6'>
            <div className='flex items-center gap-2 mt-2 text-white'>
                <img className='w-8 h-8' src={humidity} alt="" />
                <div>
                    <p>{weatherData.humidity} %</p>
                    <span>Humidity</span>
                </div>
            </div> 

            <div className='flex items-center gap-2 text-white'>
            <img className='w-8 h-8' src={wind} alt="" />
            <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
            </div>

        </div> 
        </div> 
        </> : <></>}
               
    </div>
  )
}

export default Weather
