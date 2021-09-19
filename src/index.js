//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: ""
};

var now_date = new Date();
var time_hours = now_date.getHours();
//console.log(time_hours);
let salutation;
if (time_hours < 12) {
  salutation = "Good morning";
  customStyle.color = "red";
} else if (time_hours < 18) {
  salutation = "Good afternoon";
  customStyle.color = "green";
} else {
  salutation = "Good night";
  customStyle.color = "blue";
}
//console.log(salutation);

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {salutation}
  </h1>,
  document.getElementById("root")
);
