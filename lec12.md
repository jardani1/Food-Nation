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


* here the store is created the central library 
  like this:-
  import { configureStore } from "@reduxjs/toolkit";

  import cartReducer from "./createSlice"


  const appStore = configureStore({

    reducer: {   // this reducer combines the reducer of the slices it is the stores reducer

        cart: cartReducer,

    },

  });

* here the slices in the store is created

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

* here the store  is provided to the whole app using the provider
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