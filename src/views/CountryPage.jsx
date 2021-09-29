import React, { useEffect } from "react";

import { useState } from "react";
import Country from "../components/Country";

import Header from "../components/Header";

import Loading from "../components/Loading";


const CountryPage = props =>{

    const [countryData, setCountryData] = useState([]);
    const [name, setName] = useState(null);
    const [viewAllCountries, setviewAllCountries] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleFetchCountryData = async () =>{
        try{
        const response = await fetch(`https://restcountries.com/v3/name/${name}`);
        const result = await response.json();
        if(result.status){
            setError(result.message)
        }else{
        setCountryData(result);
    }
    } catch (e){
        console.log(e);
    }
}

    const handleviewAllCountries = async () =>{
        const response = await fetch(`https://restcountries.com/v3/all`);
        const result = await response.json();
        setviewAllCountries(result);
        setLoading(true)
    }

    useEffect (() => {
        handleviewAllCountries();
    },[]);


    return ( 
        <div >
            <div className="PrincipalPAge_styles">
                <Header setName={setName} handleFetchCountryData={handleFetchCountryData} name={name} />
                {/* {countryData.map(element => (
                    <Country 
                    key={element.name}
                    flag={element.flags[0]}
                    name={element.name} 
                    code={element.alpha2Code}
                    />
                ))} */}
                {loading ? viewAllCountries.map(element => (
                    <Country key={element.name.common}
                    flag={element.flags[0]}
                    name={element.name.common} 
                    code={element.ccn3}/>
                )) : <Loading/> }
                
            </div>
        </div>
    );
};

export default CountryPage;