import React, { useContext, useState } from "react";
import axios from "axios";
import {RestaurantContext} from '../context/RestaurantContext'
import PastOder from "./PastOder";


function Cart(){

    const  {cartItems,totalPrice,emptycart}=useContext(RestaurantContext);
    const [check,setCheck]=useState(false);
    const [showOrder, setShowOrder] = useState(false)
    

    const handleCheck=async()=>{
        try{
setCheck(false);
const order= await axios.post("httlp://localhost:3000/order/past")

emptycart();
    }
catch(err){
    console.log("Error", err);
}
finally {
    setCheck(false);
}
    }

    const handleShow = () => {
        setShowOrder(!showOrder)
    }



    return (
        <section className="vh-100 vw-100 pt-5 mt-5" >
        <div className="d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 justify-content-center align-items-center   ">
                <div className="card" style={{ borderRadius: "15px" }}>
        <div className="cart-container d-flex justify-content-center pt-5">
        <h2 className="justify-content-center align-items-center">Cart</h2>
        {cartItems.map((item) => (
          <div key={item._id} className="cart-item">
            <div>
              <h3>{item.name}</h3>
              
            </div>
            <div>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        </div>
        <div className="cart-content ">
          <span style={{ color: "brown" }}>Total Price: </span> ${totalPrice}
          <button onClick={emptycart} className="justify-content-center align-items-center">Checkout</button>
        </div>
        <div style={{ textAlign: 'right' }}>
        <p id='pre-orders' onClick={handleShow}>
                    Previous Orders
                </p>
            {showOrder && <PastOder handleShow={handleShow} />}
            </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
)
}

export default Cart;