import React, { useState } from 'react'
import './Weatherapp.css'
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
const Weatherapp = () => {
    let api_key="987fe7e7efb91691245bae4ab2432c9a";
    const [wicon,setWicon]=useState(cloud_icon);

    const search= async () => {
        const element=document.getElementsByClassName("cityInput");
        if(element[0].value==="")
        {
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response=await fetch(url);
        
        let data= await response.json();
        const hu=document.getElementsByClassName("humid-percent");
        const wind=document.getElementsByClassName("wind-speed");
        const temperature=document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName("weather-location");

        
        hu[0].innerHTML=data.main.humidity+"%";
        
        wind[0].innerHTML=data.wind.speed+"kmph";
        temperature[0].innerHTML=data.main.temp+"°c";
        location[0].innerHTML=data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon(snow_icon);
        }
    }
  return (
    <div class="container">
        <div class="topbar">
            <input type="text" class="cityInput" placeholder='Search'/>
            <div class="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt=""/>
            </div>
        </div>
        <div class="weather-icon">
            <img src={wicon} alt=""/>
        </div>
        <div class="weather-temp">24°c</div>
        <div class="weather-location">London</div>
        <div class="data-container">
            <div class="element">
                <img src={humidity_icon} alt="" class="icon"/>
                <div class="data">
                    <div class="humid-percent">64%</div>
                    <div class="text">Humidity</div>
                </div>
            </div>
            <div class="element">
                <img src={wind_icon} alt="" class="icon"/>
                <div class="data">
                    <div class="wind-speed">18kmph</div>
                    <div class="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weatherapp
