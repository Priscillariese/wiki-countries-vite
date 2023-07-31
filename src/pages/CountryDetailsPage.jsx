import { useEffect, useState} from "react";
import {  useParams } from "react-router-dom";

const CountryDetails = ({countryArray}) => {
    let {countryId} = useParams();
    console.log("Country ID:", countryId)
    const [countryData, setCountryData] = useState();
    const countryFound = countryArray.filter((country) => {
        return country.alpha3Code === countryId
    })
    useEffect(() => {
        console.log("Country Found:",countryFound)
    setCountryData(countryFound[0])
    },[countryId])


  return (
    <div>
    {countryData && 
      (<> 
      <h1>Country Details</h1>
        <div>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`}/>
          <h1>{countryData.name.common}</h1>
          <h2>Capital: {countryData.capital}</h2>
          <h2>Area: {countryData.area} km 2</h2>
          <h1>Language: {Object.values(countryData.languages).join(", ")}</h1>
          <h1>Region: {countryData.region}</h1>
        </div>
        </>)
    }

    {!countryData && <h1>Loading...</h1>}
      
    </div>
  );
}

export default CountryDetails;