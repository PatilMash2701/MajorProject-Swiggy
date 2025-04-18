import { useEffect,useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import { Link } from "react-router";



function RestaurantMenu(){
    let {id}=useParams();
    // console.log(id);

    const [RestData,setRestData]=useState(null);
    const [selected ,setSelected]=useState(null);

    useEffect(()=>{
        async function fetchData(){
            const proxyServer="https://cors-anywhere.herokuapp.com/";
            const swiggyAPI=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response=await fetch(proxyServer+swiggyAPI);
            const data=await response.json();
            const tempData=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData=tempData?.filter((items)=> 'title' in items?.card?.card);
            setRestData(filterData);
           //setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData();
    },[]); 
 
    console.log(RestData);

    return (
        <div>
        <div className="w-[80%] mx-auto mt-20 mb-20">
            <Link to={`/city/delhi/${id}/search`}>
             <p className="w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl">Search for Items</p>
             </Link>
        </div>

        <div className="w-[80%] mt-20 mb-20">
        <button className={`text-2xl py-2 px-8 mr-6 border rounded-xl ${selected==="veg" ? "bg-green-600":"bg-gray-400"}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
        <button className={`text-2xl py-2 px-8 mr-2 border rounded-xl ${selected==="nonveg" ? "bg-red-600":"bg-gray-300"}`}onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non-Veg</button>
        </div>
        <div className="w-[80%] mx-auto mt-20">
            {RestData?.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected}></MenuCard>)}
        </div>
        </div>
    )
}
export default RestaurantMenu;

//https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=254192&submitAction=ENTER