import React from "react";
import { Link } from "react-router-dom";


const CapitalParameters = ({ icon, lon, lat, temp, pressure, city, thermal, timezones, visibility, wind_speed, wind_deg, humidity, weather} ) =>{
    return ( 
        <div className="row col-12 ">
            <div className="row col-10 justify-content-center text-align margin-auto" >
                <h2 className="col-5 justify-content-center direction-column align-item-center"> <span className="color" >City:</span>  {city}</h2>
                <h2 className="col-5 justify-content-center direction-column"> <span className="color">Weather: </span> {weather} </h2>
                <img className="text-align img_container2 direction-column" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                <h2 className="col-6 direction-column"> <span className="color" > Longitude:   </span> {lon} </h2>
                <h2 className="col-6 direction-column"> <span className="color" > Latitude: </span>  {lat}</h2>
                <h2 className="col-6 direction-column"> <span className="color" > Temperature (K):  </span> {temp}</h2>
                <h2 className="col-6 direction-column"> <span className="color" > Thermal Sensation:   </span>  {thermal}</h2>
                <h2 className="col-6 direction-column"> <span className="color" > Humidity:  </span> {humidity} </h2>
                <h2 className="col-6 direction-column"><span className="color" > Pressure:  </span> {pressure}</h2>
                <h2 className="col-6 direction-column"> <span className="color" > Timezone:   </span>{timezones}</h2>
                <h2 className="col-6 direction-column"> <span className="color" >Visibility:    </span>{visibility}</h2>
                <h2 className="col-6 direction-column"> <span className="color" >Wind Degrees:   </span>{wind_deg}</h2>
                <h2 className="col-6 direction-column"> <span className="color" >Wind Speed:    </span>{wind_speed}</h2>
                <Link to={`/`}>
                    <button className="col-12 btn-seemore btn_size">See All Countries</button>
                </Link>
            </div>
        </div>
    );
};

export default CapitalParameters;