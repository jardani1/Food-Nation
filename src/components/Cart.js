import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/createSlice";
const Cart = () => {

  const cartItems = useSelector((store)=> store.cart.items)
// const store = useSelector((store)=> store) we can do it like this
// and then we can extract items from the store then use it. but it is not the performant way 
// by this way yu suscribe to the whole store and is if any thing updates in your store the the it store var here const strore will update
// and in large application the store is very big so you should suscribe only to items 
// be carefull while using redux!


const dispatch = useDispatch();


const handleClearCart = ()=>{
    dispatch(clearCart());
};


  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
      <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart

      </button>
      {(cartItems.length===0)&&<h2>Cart is empty! Add some Items.. </h2>}
        <ItemList items = {cartItems} />
      </div>
    </div>
  );
};

export default Cart;