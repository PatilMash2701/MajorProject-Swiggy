function FoodCard({foodData}){
    return (
        <>
        <a href={foodData?.action.link}>
         <img className="w-45 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
        </>
    )
}
export default FoodCard;