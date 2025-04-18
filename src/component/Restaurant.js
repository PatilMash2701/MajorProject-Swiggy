import {useState,useEffect} from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

function Restaurant(){
    const [RestData,setRestData]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const proxyServer="https://cors-anywhere.herokuapp.com/";
            const swiggyAPI="https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true";
           const response=await fetch(proxyServer+swiggyAPI);
           const data=await response.json();
           //setRestData(data);
           setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData();
    },[]);
   console.log("Mahesh Patil");
   console.log(RestData);

   if(RestData?.length===0){
       return <Shimmer></Shimmer>;
   }
    return (
        <>
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {RestData?.map((restInfo,index)=><RestCard key={restInfo?.id||index} restInfo={restInfo}></RestCard>)}
              
        </div>
        </>
    )
}
export default Restaurant;

// restInfo?.id   giving question mark like that plays an important role in fetchind data method