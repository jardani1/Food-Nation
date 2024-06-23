import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";

import { addItem } from "../utils/createSlice";

const ItemList = (items) => {
  

  const dispatch = useDispatch();

  const handleClick = (item)=>{
      dispatch(addItem(item));     // here the it goes as a action.payload 
  }

  return (
    <div>
      {items.items.map((item) => {
        return (
          <div
            data-testid="itemList"
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span> {item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
                 <div className="absolute">
               <button className="p-2 mx-16 rounded-lg bg-blue-300 text-white shadow-lg hover:bg-blue-700" onClick={()=>handleClick(item)}>Add +</button>
               </div>
              <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
