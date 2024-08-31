import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({seconds}) => {
	const numToString = seconds.toString()
	// 9 
	// 10 
	return (
		<div className="container-fluid bg-black">
			<div className="icon text-light"><i class="far fa-clock"></i></div>
			<div className="seconds6">{seconds < 10 ? seconds:numToString[1]}</div>
			<div className="seconds5">{seconds < 10 ? seconds:numToString[1]}</div>
			<div className="seonds4">{seconds < 10 ? seconds:numToString[1]}</div>
			<div className="seconds3">{seconds < 10 ? seconds:numToString[1]}</div>
			<div className="seconds2">{seconds < 10 ? 0:numToString[0]}</div>
			<div className="seconds1">{seconds < 10 ? seconds:numToString[1]}</div>
		</div>
	);
};

export default Home;
