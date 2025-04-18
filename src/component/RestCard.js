import {Link} from 'react-router';



function RestCard({restInfo}){

  return (

    <Link to={"/city/delhi/"+restInfo?.info?.id}>
    <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95">
    <img className="w-70 h-45 object-cover mx-auto mt-20 gap-5 rounded" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
    <div className="w-[95%] mx-auto mt-3">
    <div className="font-bold text-xl">{restInfo?.info?.name}</div>
    <div className="flex gap-2">
    {/* <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < rating ? "#facc15" : "#e5e7eb"} // Yellow for filled, Gray for empty
          className="w-6 h-6 transition-all"
        >
          <path d="M12 2l2.66 6.78 7.1.61a1 1 0 01.55 1.74l-5.29 4.62 1.66 7.13a1 1 0 01-1.46 1.1L12 18.77l-6.22 3.21a1 1 0 01-1.46-1.1l1.66-7.13-5.29-4.62a1 1 0 01.55-1.74l7.1-.61L12 2z" />
    </svg> */}
    <span className="text-lg">{restInfo?.info?.avgRating}</span>
    <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString}</span>
    </div>
    <div className="text-gray-600 text-xl mt-1 h-7 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>
    </div>
    </div>
    </Link>
  )


}
export default RestCard;