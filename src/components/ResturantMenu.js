
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_url } from "../utils/constants";
import ResturantCategory from "./ResturantCategory";


// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import useResturantsMenu from "../utils/useResturantsmenu";


// const ResturantMenu = () => {


//     const { Resid } = useParams();

//     const resInfo = useResturantsMenu(Resid);


//     if (resInfo == null) return <Shimmer />;

//     const { name, cuisines, costForTwoMessage } = resInfo.data.cards[2].card.card.info;
//     const { itemCards } = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
//     console.log(itemCards);

//     return (
//         <div>
//             <h1>{name}</h1>
//             <h2>{cuisines.join(",")}</h2>
//             <h3>{costForTwoMessage} </h3>
//             <br></br>

//             <h2>Menu</h2>
//             <ul>
//                 {itemCards.map((res) => (
//                     <li key={res.card.info.id}>
//                         {res.card.info.name}-{"Rs" + " "}{res.card.info.price / 100}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ResturantMenu;



// ------------------------------------before using custom hooks-------------------------------


const ResturantMenu = () => {
    const [resInfo, setresInfo] = useState(null);
    // const [showItems, setShowItems] = useState(null);
    const[showIndex,setshowIndex] =useState(null);

    const { Resid } = useParams();
    // console.log(Resid);

    useEffect(() => {
        fetchMenu();
    }, []);
    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=305684&catalog_qa=undefined&submitAction=ENTER

    const fetchMenu = async () => {
        const data = await fetch(
            Menu_url +
            Resid +
            "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
        );
        const json = await data.json();
        setresInfo(json);
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        // console.log(json.data);
        //.card.itemCards[0].card.info.name)
    };

    if (resInfo == null) return <Shimmer />;
    // showItems = "false";

    const { name, cuisines, costForTwoMessage } = resInfo.data.cards[2].card.card.info;
    // const { itemCards } = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    // console.log(resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories);

    // previously here in the return we displayed menu in this comopnent's return itself by iterating over the itemCards
    // but now we display the menu by category like recomended ,  main couse , etc so first we divide the data from the fetch menu
    // to categories and used a separate component(ResturantCategories) to show the categories like recomended and then to the the items
    // in the recomended categories we used a component itemlist
    // -> first we passed props to ResturantCategory from the ResturantMenu and from the ResturantCategory we passed props to itemList
    // const showItems = false;
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
            {cuisines.join(",")}-{costForTwoMessage}
             </p>
         
           { categories.map((category,index) =>(
            <ResturantCategory
             key = {category?.card?.card?.title }
             alpha={category?.card?.card}
             showItems= {index===showIndex?true:false} // here you might think how show item updates on its value as it is not a state var see notes for that 
             setshowIndex = {()=>setshowIndex(index)}
             showVerify = {()=>setshowIndex(null)}
             /> )) 
                      }    
                      
            

        </div>
    );
};

export default ResturantMenu;


