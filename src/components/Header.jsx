import React from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

const Header = ({setName,name,handleFetchCountryData}) =>{

    // const [countryData, setCountryData] = useState([]);
    // const [error, setError] = useState(false);

    // const handleFetchCountryData = async () =>{
    //     try{
    //     const response = await fetch(`https://restcountries.com/v3/name/${name}`);
    //     const result = await response.json();
    //     if(result.status){
    //         setError(result.message)
    //     }else{
    //     setCountryData(result);
    // }
    // } catch (e){
    //     console.log(e);
    // }
    // } 
    
    return ( 
        <div className="row col-12 ">
            <div className="row col-12 align-item-center space-between header-color">
                    <Link className=" h1_styles header-color" to="/">
                    <h1 className="header-color" >WORLD'S COUNTRIES</h1>
                    </Link>
                    <SearchForm 
                    setName={setName} 
                    name={name}
                    handleFetchCountryData={handleFetchCountryData}
                    />
                </div>
        </div>
    )
};

export default Header;