import React from "react";
import { Link } from "react-router-dom";

const Country = ({flag,name,code}) =>{
    return ( 
        <div className="display_flex justify-content-center row col-6">
            <div className="col-4 flag_card justify-content-center">
                <h2 className="col-12 justify-content-center txt-align">{name}</h2>
                <img className=" col-12" src={flag} alt={name} />
                <Link to={`/details/${name}`}>
                <button className="btn-seemore col-12">See More</button>
                </Link>
            </div>
        </div>
    );
};

export default Country;