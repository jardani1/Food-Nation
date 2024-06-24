# IN this lec we study about class based cmponents 

* there is a portion note of this lec in it codes only - about js userclassjs

-> We dont use class based component we use function based component as we we used to build swiggy but we are going to study class based components for the interviews and understanding react

# class based component and function based based component 

-> functional component is a function that returns some piece of jsx and class based component is a class that returns some piece if jsx inside a render method.

# claass based componenet

we use constructor to receive the props we cannot acess it like we used to acess in funtion based componnet
we use super(props) props are correctly passed to the parent constructor, allowing us to access this.props inside the constructor

-> when ever a call based  component is renderd on the web page it is  like calling the function to be mounted on the webpagee its like
   making an instance the class e.g:-
class UserClass extends React.Component{
   // extends React.Component tells react that usercalass is a class based component
# this contructer is called first whenever the class is rendered or he instance is created
   constructor(props){           

    super(props)
     console.log(props);
   }

   render()  // and then the render is called after constructor

}

-> one more thing i am not sure but i think this instance of call theory also works for the function based components.
# refer to the code in UserCall.js for creting a state variable its diff for creating in function based-component and class based component

-> we create another state varible by seprating a comma in this.state and in function based commonent we make diffrently 
   but at the backend its all in the same object's component state is a very big object in react.
-> state variable is a big object

-> in React.component there is a component which is componentDidMount(){} which is called after the component is rendered
# life cycle of react component
-> first the constructor is called then render is called and then the componentDidMount() as the name says it loads after when the whole component is mounted

suppose if there is parent class based component then you will see that 
 parent constructor -> parent Render -> child constructor -> child render -> child componentDidMount() -> parent componentDidMount() : this is the lifecycle

# see no one will teach you this!
=>when there are muliple class based component like first & secound inside a class based component the react optimizes , it batches or binds the rendering phase then goes to load the component did mount see i
refer to picture - img_class_based_component.png
see updating the dom is a heavy cost operation so react batches it up in the case of multiple childof class based component.
simply you can say that render phase happens fast so react batches it up and commit phase takes time and it is a costly operation so it does at last