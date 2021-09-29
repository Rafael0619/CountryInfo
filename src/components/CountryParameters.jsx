import React from "react";
import { Link } from "react-router-dom";

const CountryParameters = ({flag,name,capital,altSpellings,region, subregion, area, languages }) =>{
    return ( 
        <div className="row col-12 ">
            <div className="row col-12 heigth">
                <div className="col-6 row text-align ">
                    <h2 className="col-12 justify-content-center margintop">{name}</h2>
                    <div className=" col-12">
                        <img className=" img_container justify-content-center" src={flag} alt={name} />
                    </div>
                </div>
                <div className="col-6 row">
                    <h2 className="col-12 data_styles"><span className="color">Name: </span>{altSpellings}</h2>
                    <h2 className="col-6 data_styles"><span className="color">Continent: </span>  {region}</h2>
                    
                    <h2 className="col-6 data_styles"><span className="color">Subregion: </span>{subregion}</h2>
                    <h2 className="col-6 data_styles"> <span className="color">Capital:</span>      {capital}</h2>
                    <Link to={`/capital/${capital}`}>
                    <button className=" btn-seemore btn_size ">Capital Weather</button>
                    </Link>
                    <h2 className="col-12 data_styles"><span className="color">Area (km²): </span>{area}</h2>
                    <h2 className="col-6 data_styles"><span className="color">Language: </span>{languages}</h2>
                    <Link to={`/`}>
                    <button className=" btn-seemore btn_size">See All Countries</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default CountryParameters;