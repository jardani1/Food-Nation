import UserClass from './UserClass';
import User from './User';
import {Component} from 'react';
import UserContext from '../utils/UserContext';

class About extends Component {
  constructor (props) {
    super (props);

    this.state = {
      // this is how we create state variable in class based component
      userInfo: {
        name: 'Dummy',
        location: 'Default',
      },
    };
  }

  async componentDidMount () {
    const api = await fetch ('https://api.github.com/users/jardani1');
    const data = await api.json ();

    this.setState ({
      userInfo: data,
    });
    console.log (data);
  }

  render () {
    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div>
        <img className ="w-10" src={avatar_url} />
        <h1>About</h1>
        <div>
          logged user
          <UserContext.Consumer>
            {({LoggedInUser})=><h1 className="font-bold text-xl">{LoggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/* <h2>This is namaste React Web series</h2>
        <h3>The Sumukh Shrivastav will work on the project</h3> */}

        {/* <User name = {"Sumukh"} location = {"dehradun"} contact ={"Yahoo.com"}/> */}
        <UserClass name={name} location={location} />
        <UserClass name={name} location={location} />
      </div>
    );
  }
}

export default About;

/*
--------------------------------------render phase       
parent constructor
parent render 

 first child consructor
 first child render


 secound child constructor
 secound child render


---------------------------------------------commit  phase/React batches up render phase to perform the costly operation later in one go
 first child component did mount
 secound child component did mount

parent component did mount 

/*
-------------mounting------------
constructor
render (with dummy data)
<html dummy/>

componentdidmount
 api call
 this.setState
//  the states updates and react re renders
-------------updating
renders(with api data)

after the re rendering componentwillUpdate will be called
and componentWillUnmount will be called if we move to another page then.

*/
