import React from "react";
import { Link } from "react-router-dom";


const CapitalParameters = ({ icon, lon, lat, temp, pressure, city, thermal, timezones, visibility, wind_speed, wind_deg, humidity, weather} ) =>{
    return ( 
        <div className="row col-12 ">
            <h2>City: {city}</h2>
            <h2>Weather:  {weather} </h2>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
            <h2>Longitude:  {lon} </h2>
            <h2>Latitude:   {lat}</h2>
            <h2>Temperature (K): {temp}</h2>
            <h2>Thermal Sensation:  {thermal}</h2>
            <h2>Humidity:  {humidity} </h2>
            <h2>Pressure: {pressure}</h2>
            <h2>Timezone: {timezones}</h2>
            <h2>Visibility:  {visibility}</h2>
            <h2>Wind Degrees: {wind_deg}</h2>
            <h2>Wind Speed:  {wind_speed}</h2>
            <Link to={`/`}>
                <button className=" btn-seemore btn_size">See All Countries</button>
            </Link>
        </div>
    );
};

export default CapitalParameters;