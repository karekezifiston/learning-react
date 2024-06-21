//onChange= event handler used primarily with form elements 
// ex. <input>, <textarea>,<select>,<radio> 
// Trigger a function every time the value of the input changes 
    
import React, {useState} from "react";
    
function Shopping(){
  
    const[name, setName]=useState("Guest");
    const[quantity,setQuantity]=useState(1);
    const[comment,setComment]=useState("");
    const[payment,setPayment]=useState("");
    const[shipping,setShipping]=useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(<div>
        <h1>First Project</h1>
        <input value={name} onChange={handleNameChange}/>
        <p>Name:{name}</p>

        <input value={quantity} type="number" onChange={handleQuantityChange}/>
        <p>Quantity:{quantity}</p> 
         
        <textarea value={comment} placeholder="Enter delivery instructions"  onChange={handleCommentChange}/>
        <p>Comment:{comment}</p>  

        <select value={payment}onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="giftcard">Giftcard</option>
        </select>
        <p>Payment:{payment}</p>

        <label>
            <input type="radio" value="Pick Up"
                    checked={shipping==="Pick Up"}
                    onChange={handleShippingChange}/>
            Pick Up
        </label>
        <br />
        <label>
            <input type="radio" value="Delivery"
                    checked={shipping==="Delivery"}
                    onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping:{shipping}</p>

    </div>);

}
export default Shopping