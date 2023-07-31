import React, { useEffect, useState} from "react";
import { Link} from "react-router-dom";

const HomePage = ({countryArray}) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        console.log("Country array:", countryArray)
        setCountries(countryArray);
    },[countryArray])

return (
  <div className="container" >
    <h1>WikiCountries: Your Guide to the World.</h1>
    {countries && countries.map((country) => (
       <Link to={`/${country.alpha3Code}`}>
       <div className="list-group" key={country._id}>
          <img style={{height: 100, width: 150} } src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
          <h3 className="list-group-item list-group-item-action">{country.name.official}</h3>
      </div>
      </Link> 
      ))}
    {!countries.length && <h1>Loading...</h1>}
  </div>
);
}

export default HomePage;