import "./App.css";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react"; 

const App = () => {
  const [countryArray, setCountryArray] = useState([]); 

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        console.log("Response:", response)
        setCountryArray(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage countryArray={countryArray} />} />
        <Route path="/:countryId" element={<CountryDetails countryArray={countryArray} />}  />
      </Routes>
    </div>
  );
}

export default App;