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

// here catrSlice returns an object which has the reducer and the action so we export
// the reducer by default and frm th action we specifcallty export additem ,clear cart, remove items action..


export const{addItem,cleanCart,removeItem}=cartSlice.actions;

export default cartSlice.reducer;