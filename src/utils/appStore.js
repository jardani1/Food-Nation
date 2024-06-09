import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./createSlice"


const appStore = configureStore({

    reducer: {   // this reducer combines the reducer of the slices it is the stores reducer

        cart: cartReducer,

    },

});


export default appStore;



