

function GroceryCard({grocery}) {
    return (
        <>
        <div className="flex flex-wrap w-80 h-150 object-cover">
        <a href={grocery?.action?.link}>
        <img className="w-80 h-140 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+grocery?.imageId}></img>
       </a>
       <h2>{grocery?.action?.text}</h2>
       </div>
       </>
    )
}
export default GroceryCard;