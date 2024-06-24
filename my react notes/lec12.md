# Redux and redux roolkit

- redux is also like the central data library like context

- first thing you need to lnoe is that redux is not mandartory when there is a lot of data we are dealing with
   with a lot of read and write operation then you should use redux.

- and the diffent between context/useContext and redux is that is contexxt is within react and redux is what wehave to install from outside
   it does'nt comes with react.

--
Today's session will be on more efficient & complex ways of handling data in our application. -> Redux

Small apllication -> Context API is sufficient

When application grows bigger -> Use Redux

Redux -> external library for state management

Concerns with Redux :

Huge learning curve
Complex configuration
Too much boilerplate code
So, Redux Toolkit was introduced

Redux vs Redux-Toolkit

At the end of the day -> Redux is an Object which can be accessed by all components

State variable 's scope -> Only within the component

Only single Redux store -> for the whole app -> with logical separation -> with each store having different slices

cart

user

auth

. . . slices

Today's feature that we are building -> Cart Workflow

Restaurant Menu Click on ADD button -> Item added to Cart ->
--
   

-> redux offers easy debuging

*************************************************************************

* refer to the figure / the right red box is the redux glocal centcal space which is a big js object / redux store

-> I cannot directly add item to the card slice.
so when you will click the add button it wil dispatch an action which will call a function and this function internally modifies the cart spec ifically the slice of the redux store.
 
-> what in the above lines was said is to how to write data.
 and the selector is used to read the data from the store
 it reads the card slice of the store.
 
->there is jargon when we use selector this phenmenah is called sucribing to the store. bacically it means the header components has suscribed to the store as it updates the no if there is an update in the store

=> add(click) -> dispaches an action -> reducer function-> updates slices of our store.

-> and the cart which is the headers component is suscribed to the slice using a selector

-> it all happens behind the seen


* here the store is created the central library  - in a file in utils app tore .js
  like this:-
  import { configureStore } from "@reduxjs/toolkit";

  import cartReducer from "./createSlice"


  const appStore = configureStore({

    reducer: {   // this reducer combines the reducer of the slices it is the stores reducer

        cart: cartReducer,

    },

  });

* here the slices in the store is created - in a file in utils createSlice.js

  import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({

    name : "cart",
    initialState:{
        items:[],
    },

    reducers:{
        addItem:(state,action)=>{ // it id the dicpatched action which the  calls the function or they have reducer funtional these 3 actions have reducer function the below lines then which..
            state.items.push(action.payload); // we are mutating the stae over here
        },
        removeItem:(state)=>{ // reducer function of the action removeItem 
            state.item.pop();
        },
        cleanCart:(state)=>{
            state.items.length=0;
        },
    },

});

* here the store  is provided to the whole app using the provider -  in applayout.js
     import { Provider } from "react-redux";
   < Provider store={appStore} > // the sore is provided to the whole app
    <UserContext.Provider value={{ LoggedInUser: userName ,setuserName }}>
      <React.Fragment>
        
        {/* <UserContext.Provider value={{ LoggedInUser: "Elon Musk"}}>  */}
          <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
        <Footer />
      </React.Fragment>
    </UserContext.Provider>
    </Provider>


* here to read the cart and show it in the cart(2 items) we use selector
// suscribing the store using the selector for that we use use selector hook
  const cartItems = useSelector((store)=>store.cart.items);

  and then we write cartItems.length
  


see til the point i understnad tah how does this clicking add button updates the the item count in that header cart is
-> on click of the add button we have dispatched an an action which updates the slice and the it mean it updates the cetral data lib\store
and to show the update on the header's cart we suscribe to the store

* then we use a selector to suscribe  cart.js and we render the itemList with the item we reuse the component item:-
 we suscribe with the sote items here the items were updated whn we clicked so we suscribed to the updated items and rendered the items using Itemlist with the prop as - const cartItems = useSelector((store)=> store.cart.items)


* how the state was mutated in the older vanilla redux
   vanilla redux => DON'T Mutate The State , returnng was mandatory,
   const newState =[...state];
   newState.items.push(action.payload);
   return newstate


   but we can directly mutate the state in the redux toolkit now and there is no need of returning it
   but the redux toolkit somewhat uses the same it also creates a new state like vanilla
   an it use immer to calculate the diff between the two state and then updates

=> if you want to console the state do it like this console.log(current(state)) in the reducer fn doing this console.log(state)will only print a proxy object


Read about - https://redux-toolkit.js.org/rtk-query/overview