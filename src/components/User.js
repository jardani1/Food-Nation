import { useState } from "react";


const User = (props)=>{
    

    const [count] =useState(0);
    const [count2] =useState(2); //  we make another state variable like more theory of the backend is written in the lec8.md

    return( 
    <div className="user-function-based">


    <h2> Count = {count}</h2>
    <h2> {props.name}</h2>
 
    <h3>  Location:{props.location}</h3>

    <h4>  Contact : {props.contact}</h4>
   
    </div>
    );
       
    
}

export default User;