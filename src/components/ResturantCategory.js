
import ItemList from "./itemList";
import { useState } from "react";
// go to the lec first

const ResturantCategory = ({alpha,showItems,setshowIndex,showVerify}) => {

    //  console.log(alpha?.alpha?.itemCards);

    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {

        setshowIndex();
        if(showItems===true){
            showVerify();
        }
    };

    // more accurate way
    // const handleClick = () => {
    //     if (showItems === true) {
    //         showVerify(); // Sets showIndex to null
    //         setTimeout(() => {
    //             setShowIndex(index); // Updates showIndex to new index after showVerify is complete
    //         }, 0);
    //     } else {
    //         setShowIndex(index); // Directly updates showIndex to new index if not shown
    //     }
    // };

    return (

        <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 shadow-lg ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                    {alpha?.title}({alpha?.itemCards?.length})
                </span>
                <span>▼</span>
            </div>
            {showItems && <ItemList items={alpha?.itemCards} />}
        </div>


    );

};

export default ResturantCategory;