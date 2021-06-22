import React from "react";

function Greeting() {
    
let box = {
 
    fontFamily: 'Aclonica',
    textAlign : "center",
    margin : "300px auto",
    fontWeight : "Light",
    color : "red",
    fontSize : "55px"
  
  }
  
  let unique = {};
  
  let getCurr = new Date().getHours();
  let greeting = "";
  
  if(getCurr >= 1 && getCurr <= 11) {
    greeting += 'Good Morning';
    unique.color = "Lightgreen";
  }
  else if(getCurr >= 12 && getCurr <= 19) {
    greeting += "Good Evening";
    unique.color = "Orange";
  }
  else{
    greeting += "Good Night";
    unique.color = "Silver";
  }
  
  return (
    <React.Fragment>
      <div>
        <h1 style={box}>
          Hello Sir,<span style={unique}> {greeting}</span>
        </h1>
      </div>
    </React.Fragment>
  );
}

export default Greeting;
