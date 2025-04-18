import { useSelector } from "react-redux";
import { Link } from "react-router";


function RestHeader(){
      
    const counter=useSelector(state=>state.cartslice.items);
    let countTotal=useSelector(state=>state.cartslice.count);
    // for(let i=0;i<counter.length;i++){
    //     countTotal+=counter[i].quantity;
    // }

    return (
        <div className="container w-[80%] mx-auto py-4 px-8 bg-gray-200 text-5xl flex justify-between items-center">
            <div>
                <p className="text-orange-600 font-bold">Swiggy</p>
            </div>
            <div>
                <Link to="/Checkout">
                <p>Cart :{countTotal} </p>
                </Link>
            </div>
        </div>
    )

}


export default RestHeader;