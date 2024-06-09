import React from "react";

// React.component is a class that comes from React
class UserClass extends React.Component{
   // extends React.Component tells react that usercalass is a class based component

   constructor(props){

    super(props)
    //  console.log(props);

     this.state={   //  this is the way of creating a state variable in class based component
      count:0,
      // count2:2,         //  we make another state variable like more theory of the backend is written in the lec8.md
     };
   }

  render(){

    const{name , location }=this.props; // you can also destructure like this

    return(
      <div className="user-class-based">

          <h2>Count = {this.state.count}</h2>


          <button                           // updating the state variale
          onClick={
            ()=>{
              this.setState({
                 count:this.state.count +1
                 });
              }
          }
          
          >
          Count Increaser

          </button>
          <h2>{name}</h2>
     
          <h3>Location:{location}</h3>

          <h4>Contact : {this.props.contact}</h4>
      </div>
    )
  }
}

export default UserClass;