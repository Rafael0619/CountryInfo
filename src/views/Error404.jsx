import React from "react";
import { Link } from "react-router-dom";

const Error404 = () =>{
    return ( 
        <div >
        <div className="display_flex justify-content-center row col-12">
        <div className="col-12 Warning-error justify-content-center">
            <h2 className="col-12 justify-content-center txt-align"><span className="color">Not Found</span></h2>
            <img className=" col-12" src="https://media.istockphoto.com/vectors/error-404-page-not-found-vector-id673101428?k=20&m=673101428&s=170667a&w=0&h=sifFCXQls5ygak3Y-II0cI1tibgQZVyPWzpLHtHKOGg="  />
            <Link to="/">
                <button className="btn-seemore col-12">Back To Home</button>
            </Link>
        </div>
    </div>
    </div>
    );
};

export default Error404;