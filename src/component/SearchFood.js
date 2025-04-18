import { useParams } from "react-router";
import { useState } from "react";

function SearchFood(){
    const {id}=useParams();
    const [food,setFood]=useState(null);

    return (
       <div className="w-[80%] mx-auto mt-20">
        <input className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border" placeholder="search here" onChange={(e)=>setFood(e.target.value)}></input>
       </div>
    )
}

export default SearchFood;