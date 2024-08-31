//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let seconds = 0;
setInterval(() =>{
    seconds++
    ReactDOM.createRoot(document.getElementById('app')).render(<Home seconds={seconds}/>);
}, 1000);
   

//render your react application


