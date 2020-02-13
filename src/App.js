import React from "react";
//import "bootstrap/dist/css/bootstrap/min.css";
import "./App.css";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "24338ca709c5eb507993a363beb9f9d5";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    calcCelsius(tempo){
        let cell= Math.floor(tempo - 273.15);
        return cell;
}
    getWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
          
        if (city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the values."
            });
        }
    }
    render() {
        return ( < div className= "cont">
            < div className = "wrapper" >
            <div className = "main" >
            <div className = "container" >
            <div className = "row" >
            <div className = "title-container" >
            <Titles />
            </div> 
            <div className = "form-container" >
            <h4 className = "title-explain" > Finn ut hvordan  været er i hele verden  </h4>
            <Form getWeather = { this.getWeather }/>
            <Weather temperature = { this.state.temperature }
            humidity = { this.state.humidity }
            city = { this.state.city }
            country = { this.state.country }
            description = { this.state.description }
            error = { this.state.error }
            />
             </div > 
            </div>
             </div>
            </div> 
            </div >
             </div>
        );
    }
};

export default App;