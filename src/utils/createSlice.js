import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({

    name : "cart",
    initialState:{
        items:[],
    },

    reducers:{ // it is reducers not reducer like in store becs it has multiple reducers and the store one is a big reducer
        addItem:(state,action)=>{ // it id the dicpatched action which the  calls the function or they have reducer funtional these 3 actions have reducer function the below lines then which..
            state.items.push(action.payload); // we are mutating the stae over here
        },
        removeItem:(state)=>{ // reducer function of the action removeItem 
            state.items.pop();
        },
        clearCart:(state)=>{

            // Rtk says that either you can mutate the state or you can return a new state
            // state.items.length=0;  // original state the araray is 0 now []

            return {items:[]}; // replaces the original state as it is a new state
        },
    },

});

// here catrSlice returns an object which has the reducer and the action so we export
// the reducer by default and frm th action we specifcallty export additem ,clear cart, remove items action..


export const{addItem,clearCart,removeItem}=cartSlice.actions;

export default cartSlice.reducer;