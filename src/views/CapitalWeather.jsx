import React,{useState,useEffect} from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import SendCapitalWeather from "../components/SendCapitalWeather";
import FetchError from "../components/FetchError";



const CapitalWeather = ({}) =>{
    
    const objeto = useParams();
    const [capitalName, setCapitalName] = useState(objeto.capital);
    const [loading, setLoading] = useState(false)
    const [capitalData, setCapitalData] = useState(null);
    const [error, setError] = useState(false);
    



    const fetchCapitalApi = async () =>{
        try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capitalName}&appid=111e6b2ddfce9fdfe08ee7a72e7f9c7e`);
        const result = await response.json();
        console.log(result);
        if(result.message){
            console.log("si funciona")
            setError(result.message)
            setLoading(true)
        }else{
        setCapitalData(JSON.parse(JSON.stringify(result)));
        setLoading(true);
        setError(false);
    }
    } catch (e){
        console.log(e);
    }
    }

    useEffect(()=>{
        fetchCapitalApi();
    },[])

    return(
        <>
            {loading ? error ? (
                <FetchError message={error} /> ):(
                <SendCapitalWeather capitalData={capitalData} city={capitalName} />
            ) : <div className="margin-left"><Loading/></div> }
        </>
    )
}

export default CapitalWeather;