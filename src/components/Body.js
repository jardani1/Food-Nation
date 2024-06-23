import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const [ListofResturants, setListofResturants] = useState([]); // the argument of usestate was resList
  const [filterofResturants, setfilterofResturants] = useState([]); // the argument of usestate was resList
  const [searchVal, SetsearchVal] = useState("");

  // created 3 state variable for the working of the search button

  const status = useOnlineStatus(); // the hooks should be written in order for state managemnt and avoid re rendering unnessacerially

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setListofResturants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterofResturants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };
  const { LoggedInUser, setuserName } = useContext(UserContext);

  // console.log("body rendered")

  if (status == false) {
    return <h1>YOU ARE OFFLINE!</h1>;
  }

  //conditional rendering
  if (ListofResturants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex justify-between">
        <div className="m-4 p-4">
          <input


            data-testid="searchInput"
            className="border-4 ml-12 "
            value={searchVal}
            onChange={(e) => {
              SetsearchVal(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg hover:bg-gray-200 "
            onClick={() => {
              const newList = ListofResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchVal.toLowerCase())
              );
              setfilterofResturants(newList);
              console.log(filterofResturants);
            }}
          >
            search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-4 py-2 m-4 bg-gray-100 rounded-lg hover:bg-gray-200 ml-[-17rem]"
            onClick={() => {
              const filteredList = ListofResturants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setfilterofResturants(filteredList);
              
            }}
          >
            Top Rated Resturants
          </button>
          {/* <input className="border-4 ml-12 " value={LoggedInUser} onChange={(e) => { value= setuserName(e.target.value) }}></input> */}
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filterofResturants.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={"/resturants/" + restaurant.info.id}> {" "}<RestaurantCard resData={restaurant} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
