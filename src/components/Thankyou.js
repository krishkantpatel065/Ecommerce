import React from 'react'
import {Link} from 'react-router-dom';
import "../styleFolder/thankyou.css";
const Thankyou = () => {
  return (
   <div className="thankyou-page">
    <h1>🎉 Thank You for Your Order!</h1>
    <p>Your items will be delivered soon.</p>
    <Link to="/profile/orderhistory">
      <button>See Order</button>
    </Link>
    <Link to="/product">
      <button>Continue Shopping</button>
    </Link>
  </div>
  )
}

export default Thankyou
