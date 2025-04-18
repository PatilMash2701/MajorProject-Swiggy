import { useSelector } from "react-redux";



function Checkout(){

    const items = useSelector(state=>state.cartslice.items);

    return (
        <>
        <div>
           {
            items.map((value)=><div className="text-5xl" key={value.id}>{value.name}</div>)
           } 
        </div></>
    )

}

export default Checkout;