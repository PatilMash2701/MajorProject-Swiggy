import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './CartSlicer';


const store=configureStore({
    reducer:{
        cartslice:CartReducer,
    }
})

export default store;