import imageGridCards from "../utils/FoodData";
import FoodCard from "./FoodCard";


function FoodOption(){

    return (
        <>
        <div className="w-[90%] container mx-auto flex flex-wrap mt-10 gap-5 ">
            {
                imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
            }
        </div>
        
        </>

    )
}
export default FoodOption;