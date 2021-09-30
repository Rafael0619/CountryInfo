import React from "react";
import CapitalParameters from "./CapitalParameters";


const SendCapitalWeather = ({ capitalData, city} ) =>{
    return ( 
        <>
        { capitalData && (  
            <CapitalParameters
            city={city}
            weather={capitalData.weather[0].description}
            icon={capitalData.weather[0].icon}
            lon={capitalData.coord.lon}
            lat={capitalData.coord.lat}capitaData
            temp={capitalData.main.temp}
            thermal={capitalData.main.feels_like}
            humidity={capitalData.main.humidity}
            pressure={capitalData.main.pressure}
            timezones={capitalData.timezone}
            visibility={capitalData.visibility}
            wind_speed={capitalData.wind.speed}
            wind_deg={capitalData.wind.deg}
            />
            )}
        </>
        
    );
};

export default SendCapitalWeather;