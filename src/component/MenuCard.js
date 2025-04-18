import RestInfo from "./RestInfo";
import { useState } from "react";

function MenuCard({menuItems,foodSelected}){

   const [isOpen,setIsOpen]=useState(true);
   


   //categories should be written in first of all of them
   if("categories" in menuItems){
        return (
            <div className="w-full mt-5 ">
            <div className="h-2 bg-black rounded-xl"></div>
            <p className="text-3xl font-bold text-gray-500">{menuItems.title}</p>  
            <div>
                {menuItems?.categories?.map((items)=><MenuCard key={items?.title} menuItems={items} foodSelected={foodSelected}></MenuCard>)}
            </div> 
            <div className="h-2 bg-black rounded-xl"></div>
            </div>
        )
   }
   if(!isOpen){
     return (
        <div className="w-full pt-6">
            <div className="flex justify-between w-full">
            <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
            <button className="test-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"▲":"▼"}</button>
            </div>
            <div className="h-4 bg-gray-300 rounded-xl"></div>
        </div>
    )
   }
   if(foodSelected==='veg'){
    return (
        <div>
        <div className="w-full pt-6">
            <div className="flex justify-between w-full">
            <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
            <button className="test-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"▲":"▼"}</button>
        </div>
        <div>
            {menuItems?.itemCards?.map((items)=> items?.card?.info?.isVeg?<RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>:null)}
        </div>
        </div>
        </div>
    )
   }

   if(foodSelected==='nonveg'){
    return (
        <div>
        <div className="w-full pt-6">
            <div className="flex justify-between w-full">
            <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
            <button className="test-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"▲":"▼"}</button>
            </div>
        <div>
            {menuItems?.itemCards?.map((items)=>  items?.card?.info?.isVeg?null:<RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)}
        </div>
        </div>
        </div>
    )
   }

//    we can also use filter in it like:
//    if(foodSelected==='veg'){    
//        return (
//        <div>
//        {
//         menuItems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo> );
//         }
//         </div>
//         )
//     }
//     if(foodSelected==='nonveg'){
//         return (
//             <div>
//                 {
//                     menuItems?.itemCards?.filter((food)=> (!"isVeg") in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo> );
//                 }
//             </div>
//         )
//     }





    return (

       <div>

        <div className="w-full pt-6">
            <div className="flex justify-between w-full">
            <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
            <button className="test-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"▲":"▼"}</button>
            </div>
            <div>
                {menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo> )}
            </div>
        </div>
        </div>
    )
}

export default MenuCard;