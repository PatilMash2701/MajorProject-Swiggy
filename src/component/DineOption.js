import DineData from "../utils/DineData";
import DineCard from "./DineCard";


function DineOption(){
    return (
     <>
     <div className="w-[80%] mx-auto mt-20">
        <h2 className="text-2xl font-bold">Discover best restaurants on Dineout</h2>
        <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 mb-20">
            {DineData.map((RestData)=><DineCard key={RestData?.info?.id} RestData={RestData}></DineCard>)}
        </div>
        </div>
        </>  
    )
}
export default DineOption;