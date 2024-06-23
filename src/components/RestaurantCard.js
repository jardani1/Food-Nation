import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;  // const {resData} = props; 
    const{
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    }=resData?.info;  // props.resData.info

    
    // console.log(cloudinaryImageId);
    return (
      <div  data-testid="resCard" className="m-4 p-4 w-[200px]  bg-gray-100 rounded-lg hover:bg-gray-200 shadow-md">
        <img className = "rounded-lg w-44 h-44" src={CDN_URL + cloudinaryImageId}/>
        <h2 className="font-bold py-4 text-lg">{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        {/* <h4>{area}</h4> */}
        <span>
          <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
          <h4>{sla.slaString}</h4>
          <h4>{costForTwo} FOR TWO</h4>
        </span>
      </div>
    );
  };
  
  
  // Higher order componet
  
  // its is a compoent which takes a compoent as a aargument and returns a new component
  
  // its contract - input - component ==> new component
  
  
  // const withPromotedlabel=(RestaurantCard)=>{
    
    
    
  //   return(props)=> {          // here we are retuning a arrow function which returns some piece of jsx
  //     return(
  //           <div>
  //             <label>Promoted</label>
  //             <RestaurantCard {...props}/>
  //           </div>
  //     );
  //    };
  // };

  export default RestaurantCard;