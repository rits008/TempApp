
import "./css/style.css";
import React, { useEffect, useState } from 'react';
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Delhi")



    useEffect(() => {

        const callApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=273300b8844d5b5374b24e3c489b9b90`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);

        }


        callApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">

                    <input type="search" className="inputFeild" value={search} onChange={(event) => {setSearch(event.target.value) }} />



                </div>
                {!city ? (
                    <p> No data found</p>
                ) : (


                        <div>

                            <div className="info">
                                <h2 className="location">
                                <i class="fas fa-street-view"></i>
                                    {search}
                                </h2>
                                <h1 className="temp">
                                    {city.temp} °C
                                </h1>

                                <h3 className="tempmin_max"> <span className="MaxTemp">MaxTemp:{city.temp_max}°C </span>    <span className="MinTemp">MinTemp:{city.temp_min}°C </span> </h3>
                                <h3 className="preasure"> Pressure:{city.pressure} hPa </h3>
                                <h3 className="humidity"> Humidity:{city.humidity}% </h3>


                            </div>

                            <div className="wave-first"></div>
                            <div className="wave-second"></div>
                            <div className="wave-third"></div>
                        </div>
                    )
                }





            </div>
        </>

    );

};

export default Tempapp;