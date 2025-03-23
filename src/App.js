import React,{useState} from 'react';
import ReactDOM from "react-dom/client";
import Header from './component/Header';
import FoodOption from './component/FoodOptions';
import GroceryOption from './component/GroceryOptions';
//hello


//Header Section:Lets Build it.....
function App(){
     return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        </>
     )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)