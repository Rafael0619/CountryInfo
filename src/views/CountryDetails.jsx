import React,{useState,useEffect} from "react";

import { useParams } from "react-router";
import Header from "../components/Header";
import CountryParameters from "../components/CountryParameters";
import FetchError from "../components/FetchError";
import Loading from "../components/Loading";



const CountryDetails = ({}) =>{

    const objeto = useParams();

    let object={};
    let languages="";
    const [loading, setLoading] = useState(false)

    const [countryData, setCountryData] = useState([]);
    const [name, setName] = useState(objeto.name);
    const [error, setError] = useState(false);
    console.log(name)
    

    countryData.map(element=> (object=element.languages));
    for (const key in object) {
        languages = object[key];
    }

    const handleFetchCountryData = async () =>{
        try{
        const response = await fetch(`https://restcountries.com/v3/name/${name}?fullText=true`);
        const result = await response.json();
        if(result.status){
            setError(result.message)
            setLoading(true)
            console.log(result)
        }else{
        setCountryData(result);
        setLoading(true)
        setError(false);
    }
    } catch (e){
        console.log(e);
    }
    }

    useEffect(()=>{
        handleFetchCountryData();
    },[languages])

    return(
        <>
        <Header 
                setName={setName} 
                name={name}
                handleFetchCountryData={handleFetchCountryData}
                />
        {loading ? error ? (
            <FetchError message={error} />
        ):(
            <div>
            <div className="PrincipalPAge_styles">
                
                {countryData.map(element =>(
                    <CountryParameters 
                    name={element.name.common}
                    capital={element.capital[0]}
                    altSpellings={element.altSpellings[2]}
                    region={element.region}
                    subregion={element.subregion}
                    flag={element.flags[0]}
                    area={element.area}
                    languages={languages}
                    />
                ))
                }
            </div>
        </div>
        ) : <div className="margin-left"><Loading/></div> }
        </>
    )
}

export default CountryDetails;