import GroceryGridCard from "../utils/GroceryGridCard";
import GroceryCard from "./GroceryCard";

function GroceryOption(){

    return (
        <>
        <div className="mt-20 w-[90%] container mx-auto relative">
         <h1>Shop Groceries on Instamart</h1>
        <div className="w-[90%] container mx-auto flex  mt-10 gap-5  overflow-x-auto whitespace-nowrap scrollbar-hide"> 
            {
             GroceryGridCard.map((grocery)=> <GroceryCard key={grocery.id} grocery={grocery}></GroceryCard>)
            }
        </div>
        </div>
        </>
    )
};
export default GroceryOption;