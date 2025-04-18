import { useState } from "react";
import {addItems,IncrementItems,DecrementItems} from '../stored/CartSlicer';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



function RestInfo({restData}){

  //const [count,setCount]=useState(0);
  const dispatch=useDispatch();
  const addItem=useSelector(state=>state.cartslice.items);
   
  const element=addItem.find(item=>item.id===restData.id);

  const count=element?element.quantity:0;
   
  function handleAdditems(){
    //    setCount(1);
       dispatch(addItems(restData));
  }

  function handleIncrementItems(){
    //    setCount(count+1);
       dispatch(IncrementItems(restData));
  }

  function handleDecrementItems(){
    //    setCount(count-1);
       dispatch(DecrementItems(restData));
  }

   return (
    <>
       <div className="flex w-full justify-between mb-2 pb-2">
        <div className="w-[70%]">
            <p className="text-gray-700 text-xl font-semibold mb-1">{restData?.name}</p>
            <p className="text-xl">{"₹"+("defaultPrice" in restData?restData?.defaultPrice:restData?.price)/100}</p>
            <span className="text-green-600">{restData?.ratings?.aggregateRating?.rating}</span>
            <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
            <p>{restData?.description}</p>
        </div>
        <div className="w-[20%] relative h-42">
            <img className="w-full h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId}></img>
            {
            (count===0?(<button onClick={()=>handleAdditems()} className="absolute bottom-1 left-20 rounded-xl text-2xl text-green-600 px-4 py-2 shadow-md border border-white bg-white">ADD</button>):(
                <div className="absolute flex gap-3 text-2xl text-green-600 px-4 py-2 shadow-md border border-white bg-white">
                    <button onClick={()=>handleDecrementItems()}>-</button>
                    <span>{count}</span>
                    <button onClick={()=>handleIncrementItems()}>+</button>
                </div>
            ))
            }
            
        </div>
       </div>
       <hr className="mb-6 mt-2"></hr>
       </>
   ) 
}
export default RestInfo;