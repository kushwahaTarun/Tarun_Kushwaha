import React from "react"
import ReactDOM from "react-dom";
// import Slot from "./Slot";
// import "./ToDoList.css";
// import ToDoList from "./ToDoList"
// import Form from "./Form";
// import "./Form.css";
// import ToDoApp from "./ToDoApp";
// import "./ToDoApp.css";
// import Form1 from "./Form1";
// import Cards from "./Cards";

 //keep project
// import Keep from "./Keep";
// import "./Keep.css";

//Clone project
// import Clone from "./Clone";
// import "./Clone.css";

//ContextAPI
// import Context from "./Context";

//react router dom and the page
// import { BrowserRouter } from "react-router-dom";
// import Router from "./Router";
// import "./index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//website using the react.js and the bootstrap
//react router dom

import {BrowserRouter} from "react-router-dom";
import App from "./App";

// import Card from "./Card";       these are used to create webseries page
// import getFileData from "./data";        these are used to create webseries page
// import Playlist from "./Playlist";       these are used to create webseries page
// import image from "./PlaylistImage";       these are used to create webseries page

// import { render } from '@testing-library/react';
// import React from 'react';
// import ReactDOM from 'react-dom';


// ReactDOM.render(
//   <h1>This is the heading tag</h1>,
//   document.getElementById('root')
// );


//JS element like structire inside the render method is known as the JSX element

//render method is kya dikhana hai aur kaha dikhana hai

// Q. how to render multipel jsx elements inside the render() ?

//by using the div tag

// ReactDOM.render(
// <div>

//  <h1>This is the heading tag</h1>
//   <i>This is the Italic tag</i>
//   <b>This is the bold tag</b>

// </div>,
//    document.getElementById("root"));

//by using the square braces
//by passing the value in the form of an Array of an JSX Element

// ReactDOM.render(
//   [
  
//    <h1>This is the heading tag</h1>,
//     <i>This is the Italic tag</i>,
//     <b>This is the bold tag</b>
  
//   ],
//      document.getElementById("root"));

//Q.Understanding and the use of React.Fragment

// as we know we can use only single JSX element inside the Render method and if we need to add multiple then we use the div Element as
// parent of all the multiple element. as a result there is extra div in the code which is time consuming and makes difficult to access the
// code. So we use React.Fragment in the palce of div

// ReactDOM.render(
//  <React.Fragment>
  
//    <h2>Hello World</h2>
//    <h3>this is h3</h3>
//    <h4>This is h4</h4>

// </React.Fragment>,
// document.getElementById("root")
// )

//Q.project 1 create a webspage which show top 5 webseries

// ReactDOM.render(<React.Fragment>
// <h1>
// <center>My top 5 favourite webseries are</center>
// </h1>

// <ol>

//   <li>Abhay</li>
//   <li>2.0</li>
//   <li>Boss</li>
//   <li>Abhay 2</li>
//   <li>mumbai saga</li>

// </ol>
// </React.Fragment>, document.getElementById("root"));

//Q. How to declare an Javascript expression inside the XML element ?
// if need to add variable inside the XML Element we use the curly braces to declare

// var fname = "tarun";

// ReactDOM.render(
// <>
//   <h1>My name is {fname}</h1>
//   <p>This is the paragraph tag</p>
// </>,
// document.getElementById("root"));

//Q. Template Literal in JSX Elements ?

// 1.How to add multipe Javascript variable in the XML Element ?
// 1.How to add multipe Javascript variable in the XML Element using Template String ?

// const fname = "Tarun";
// const lname = "Kushwaha";

// ReactDOM.render(<React.Fragment>

// {/* <h1>This is my full name {fname} {lname}</h1>  //this is the first method to add multiple Javascript Expression to the XML Element */}
// {/* <h1>This is my full name {fname + " " + lname}</h1>  //this is the Second method to add multiple Javascript Expression to the XML Element */}
// {/* <h1>This is my full name {`${fname} ${lname}`}</h1>  //this is the Third method to add multiple Javascript Expression to the XML Element using template literal */}
// {/* <h1>{`This is my full name ${fname} ${lname}`}</h1>  //this statement is the purely created using the template Literal */}

// <h2>I am good boy</h2>

// </React.Fragment>,
// document.getElementById("root"));

//Q. Project to display date and time ?

// import React from "react";
// import ReactDOM from "react-dom";

// let date = new Date();
// let getDate = date.toLocaleDateString();
// let getTime = date.toLocaleString();

// ReactDOM.render(
//   <>

//     <h1>This is the Date and time</h1>
//     <b>Today's Date is {getDate}</b>
//     <br></br>
//     <b>Current time is is {getTime}</b>

//   </>,
//   document.getElementById("root")
// );

//How to add Attribute to the JSX Element ?

// import React from "react";
// import ReactDOM from 'react-dom';

// let img1 = "https://picsum.photos/260/300";
// let img2 = "https://picsum.photos/600/300";
// let links = "www.google.com"


// ReactDOM.render(
//   <>

//     <h1 contentEditable = "true">This is the heading first</h1><br/>     {/*this is known as self closing tag in the JSX */}
//     <img src = "https://picsum.photos/200/300" alt = "The image has been removed"/>       {/*as we learned earlier that img tag don't has closing tag so we declare self closing tag in JSX Element*/}
//     <img src = "https://picsum.photos/300/400" alt = "The image has been removed"/>       
//     <img src = {img1}  alt = "The image has been removed"/>  
   
//     <a href= {links}>
//       <img src = {img2} alt = "The image has been removed"/>   
//     </a>     

//   </>,
//   document.getElementById("root")
// );

//Q. Adding CSS Styling and importing CSS file ?
// Q. Adding Google fonts to thhe Website ? 

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// var img = "https://picsum.photos/200/300";
// var img1 = "https://picsum.photos/240/400";
// var img3 = "https://picsum.photos/300/400";
// var link = "www.google.com";

// ReactDOM.render(
//   <>

//   <div className = "content">
//     <h1>This is the Heading Tag</h1>
//   </div>

//     <div className = "box">

//     <img src = {img} alt="This is the alternate text of the Image"/>
//     <img src = {img1} alt="This is the alternate text of the Image"/>
    
//     <a href = {link} target= "_blank">
//     <img src = {img3} alt="This is the alternate text of the Image"/>
//     </a>

//     </div>
//   </>,
//   document.getElementById("root")
// )

//Q. internal css and inline styling in reactjs?

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// let img = "https://picsum.photos/200/300";
// let img1 = "https://picsum.photos/250/300";
// let img2 = "https://picsum.photos/150/300";
// let data = "This image has been removed";
// let data1 = "This image has been removed";
// let data2 = "This image has been removed";

// let style_h1 = {     //this is how internal styling works in reactJs by creating an Object
  
//   fontFamily : "century gothic",
//   fontWeight : "bolder",
//   color: "lightgreen",
//   textTransform : "Capitalize",
//   textAlign : "center"
// }

// ReactDOM.render(
//   <>

//    <h1 style= {style_h1}>This is the Heading Tag</h1>
//     <div className = "container">

//     <img src= {img}  alt= {data}/>
//     <img src= {img1}  alt= {data1}/>
//     <img src= {img2}  alt= {data2}/>

//     </div>
//   </>,
//   document.getElementById("root")
// )

//Q. create a greeting message (Project);

// import React from "react";
// import reactDom from "react-dom";
// import reactDOM from "react-dom";
// import "./index.css"

// let new_style = {
//   fontFamily: 'Raleway',
//   fontWeight: "bolder",
//   color : "red"
// }

// let styling = {};   //this is the internal styling Object in which we willadd properties dynamically

// let currentDte = new Date().getHours();
// let greeting = "";

// if(currentDte >= 1 && currentDte <= 12) {
//   greeting += "Good Morning";
//   styling.color = "lightgreen";
// }

// else if(currentDte >= 13 && currentDte <= 19) {
//   greeting += "Good After Noon";
//   styling.color = "Orange";
// }

// else{
//   greeting += "Good night";
//   styling.color = "Silver";
// }

// reactDom.render(
  
//   <React.Fragment>
//    <div className = "box">
   
//     <h1 style = {new_style}>Hello Sir,<span style= {styling}> {greeting}</span></h1>
   
//    </div>
//   </React.Fragment>,
//   document.getElementById("root")

// )

//Q. React components in hindi ? 
// components are building block of code

// import React from "react";
// import ReactDOM from "react-dom";
// import Heading from "./Heading"
// import Para from "./Para";
// import List from "./List";

// ReactDOM.render(
//   <>
//     <Heading/>         {/*This is the component*/}
//     <Para/>
//     <List/>
//   </>,
//   document.getElementById("root")
// )

//Q. making the same project that displays greeting to the user which we saw earlier ? 

// import React from "react";
// import ReactDOM from 'react-dom';
// import "./index.css";
// import Greeting from "./Greeting";

/*{we just imported data using the React import and export statement }*/

// ReactDOM.render(<Greeting/>,document.getElementById("root"));

//Q. what is import and Export in react.Js

// import React from "react";
// import ReactDOM from "react-dom";
// import value from "./Test";
// import oye , {getString , getBoolean , getNull} from "./Test";

// ReactDOM.render(
//   <>
//     <h1>This is the Heading Tag</h1>
//     <ol>
//       <li>{getNull}</li>
//       <li>{getString}</li>
//       <li>{value}</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// )

//Q. make a simple character using the react js and also the import , export and components

// import React from "react";
// import ReactDOM from "react-dom";
// import Sum from "./Sum";

// ReactDOM.render(<Sum/>,
//   document.getElementById("root")
// )

// Q. Props in ReactJS ?
// "props" (which stands for properties ) React props are like function arguments in javascript and attribute in HTML
//props are basically the Attributes or we can say that these are also the custom Attributes

//Q. What is key ? 

// key helps react identify  which items have changed (added, removed ,reordered) to give a unique key identity to every element inside the Array, a key is requireed

//this is the filter method coding

//using if else

// const getUser = "netflix";

// const GetOut = () => {

//     if(getUser === 'netflix') {
//     return (<Playlist image = {image[0].image} key = {image[0].id}/>)
// }

// else{
//     return (<Playlist image = {image[3].image} key = {image[3].id}/>)
// }
// }

//using ternary Operator

// const getUser = "netflix";

// const GetOut = () => (getUser === "netflix") ? <Playlist image = {image[0].image} key = {image[0].key}/> : <Playlist image = {image[3].image} key = {image[3].key}/>;


// ReactDOM.render(
//     <>
//     {getFileData.map((value) =>  <Card image = {value.image} key = {value.id}/>)}
//     {/* {image.map((value) => <Playlist image = {value.image} key = {value.id}/>)} */}
//     <GetOut/>
//     </>,
//     document.getElementById("root")
// );

// Q.Slot machine game ?

// ReactDOM.render(
//     <>
//         <h1 className = "slot_card">
//             Enjoy ! the 🎰 Slot Machine 🎰 Game
//         </h1>

//         <Slot one = "😄" two = "😄" three = "😄"/>
//         <Slot one = "😄" two = "🎅" three = "🍌"/>
//         <Slot one = "😄" two = "🧁" three = "🥤"/>    

//     </>,
//     document.getElementById("root")
// )

//Q.What is hooks ? 

//create a program whose value is increased by one on clicking the button

ReactDOM.render(
<BrowserRouter><App/></BrowserRouter>, document.getElementById("root"));







