import React from 'react'
import search from "../assets/search.png"
import clear from "../assets/clear.png"
import cloud from "../assets/cloud.png"
import drizzle from "../assets/drizzle.png"
import humidity from "../assets/humidity.png"
import rain from "../assets/rain.png"
import snow from "../assets/snow.png"
import wind from "../assets/wind.png"

const Weather = () => {
  return (
    <div className='flex flex-col justify-center items-center rounded-xl bg-gradient-to-tl from-[#2f4680] to-[#500ae4]' >
        <div className='flex items-center p-4 justify-between gap-2'>
            <input className='bg-white px-3 py-1 rounded-full outline-0' type="text" placeholder='Search' />
            <img className='bg-white px-1 py-0.5 rounded-full' src={search} alt="" />
        </div>

        <img className='' src={clear} alt="" />
        <p className='text-white text-5xl'>16&deg;C</p>
        <p className='text-white text-3xl'>London</p>

        <div className='flex mb-3 mt-2 justify-between gap-6'>
            <div className='flex gap-2 mt-2 text-white'>
                <img src={humidity} alt="" />
                <div>
                    <p>91 %</p>
                    <span>Humidity</span>
                </div>
            </div> 

            <div className='flex gap-2 text-white'>
            <img src={wind} alt="" />
            <div>
                <p>3.6 km/h</p>
                <span>Wind Speed</span>
            </div>

        </div> 
        </div> 

       
               
    </div>
  )
}

export default Weather
