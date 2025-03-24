function GroceryCard({ grocery }) {
    return (
        <div className=" flex flex-col items-center">
            <a href={grocery?.action?.link} className="w-full">
                <img 
                    className="w-50 h-50 object-cover rounded-2xl bg-white" 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/" + grocery?.imageId} 
                    alt="Grocery"
                />
            </a>
            <h2 className="text-center mt-2 w-50">{grocery?.action?.text}</h2>
        </div>
    );
}

export default GroceryCard;
