import { useState  } from "react";
import { Link } from "react-router-dom";
// import { LOGO_URL } from "../utils/constants";
import northimg from "/north3.png";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
 

  const {LoggedInUser} = useContext(UserContext);

  const [btnName, SetbtnName] = useState("login");


  // suscribing the store using the selector for that we use use selector hook
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems)


  return (


    <div className="flex justify-between bg-gray-200 shadow-lg items-center ml-0  border-t-2 border-gray-300">

      <div className="logo-container">
        <a href="/"><img className="w-[77px] bg-transparent ml-4" src={northimg} alt="Logo"></img></a>

      </div>


      <div className="ml-[255px]"><h2 className="text-lg">Food-Nation</h2></div>


      <div className="flex items-center1 ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="ppx-4 font-bold text-xlx-4">
            <Link to="/cart">Cart({cartItems.length})-items</Link>
          </li>
      
          {/* <button className="button1" onClick={() => { btnName === "login" ? SetbtnName("logout") : SetbtnName("login") }}>{btnName}
          
          </button>
           <li className="px-4 font-bold">User : {LoggedInUser}</li> */}


        </ul>
      </div>
    </div>
  );
};

export default Header;