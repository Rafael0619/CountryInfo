import React,{useState,useEffect} from "react";
import { useParams } from "react-router";
import SendCapitalWeather from "../components/SendCapitalWeather";




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

            <SendCapitalWeather capitalData={capitalData} city={capitalName} />
                {/* {
                <CapitalParameters
                city={capitalName}
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
                } */}
        </>
    )
}

export default CapitalWeather;