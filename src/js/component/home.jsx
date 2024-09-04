import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ seconds}) => {
	const numToString = seconds.toString().padStart(6, "0");

	return (
			<div className="container-fluid bg-black">
				<div className="icon text-light"><i className="far fa-clock"></i></div>
				<div className="seconds6">{numToString[0]}</div>
				<div className="seconds5">{numToString[1]}</div>
				<div className="seconds4">{numToString[2]}</div>
				<div className="seconds3">{numToString[3]}</div>
				<div className="seconds2">{numToString[4]}</div>
				<div className="seconds1">{numToString[5]}</div>
			</div>
	);
};

export default Home;
