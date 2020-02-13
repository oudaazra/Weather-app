import React from "react";

const Form = props => ( 
< form onSubmit = { props.getWeather } >
    < input type = "text" name = "city" placeholder = "Byen..." />
     <input type = "text" name = "country"placeholder = "Landet..." />
     <button > Finn varet... </button> </form >
);

export default Form;