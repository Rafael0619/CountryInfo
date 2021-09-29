import React from "react";
import { Link } from "react-router-dom";

const SearchForm = ({setName, handleFetchCountryData,name}) =>{
    // function preven (e){
    //     e.preventDefault();
    // }
    // onSubmit={preven}
    
    return ( 
        <div className=" justify-content-right align-item-center header-color ">
            <form  className="border-right font header-color" >    
                <input className="form_styles" onSubmit={handleFetchCountryData} type="text"
                placeholder="Search by Name" 
                onChange={e => setName(e.target.value)} />
               <Link to={`/details/${name}`}>
                <button  type="submit" onClick={handleFetchCountryData}  className="button_styles" >Check</button>
                </Link>
            </form>
        </div>
    )
};

export default SearchForm;