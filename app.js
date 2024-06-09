


import React from "react" ;
import ReactDOM from "react-dom/client" ;
// const heading = React.createElement("h1", {id:"heading"}, "Hello from sumukh he is learning react");

// ^ this react createElement it creates js object not actual heading tag the 
// render function converts objects to the tages or the actual elements

// console.log(heading)  -> returns object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); 

//   want to create two heading tags under a div then how can we do?


// const heading1 = React.createElement("h1", {id:"heading1"},"hello from react heading 1 it is");
// const heading2 = React.createElement("h2", {id:"heading2"},"hello from react heading 2 it is");

// const box = React.createElement("div",{id:"box1"},[heading1,heading2]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// var a =10
// console.log(a);

// root.render(box);


// so this is complete we can move further


// lec 3 begins                                   *******         <..>         || || ||      <..>          *********

const heading = React.createElement(
    "h1",
    {id : "heading"},
    " namaste bhaiya react"
)


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


const jsxheading = (<h1 id = "heading">Namaste bhaiya re
act from jsx</h1>);
// for writting multline jsx code we use brackets to write so that babel can undersatand.

// root.render(jsxheading);

// Funtional component

const Title = () => ( <h1>namaste react from functional component 1</h1>)

const data= 1000;


const HeadingComonent = () => 
    (
        
    <div>
    {data } 

    {Title()}
    <Title></Title>
    <Title />
    <h1>this is the functional compomonent 2</h1>
    </div>
    )

const root = ReactDOM.createRoot(document.getElementById("root"));
// in jsx javascript code be written in these brackets{} it is so helpful
 // jsx sanitizes  this data -> {} suppose if it comes from an api then jsx prevents  cross scripts attacks    by bable

 // this <Title /> or functional component can be called as function like {title()} because it is js 
 // funtion at the end of the day

 /*
    {Title()}
    <Title></Title>          :- these 3 are the same thing
    <Title />
 */


root.render(<HeadingComonent />)  
// we render funtional component by < /> for babel to understand
