import React from "react";
import "../styleFolder/deliveryReturn.css";
function DeliveryReturn() {
  return (
    <div className="topDiv">
      <div className="mainDiv">
        <div className=" innerDiv warrantyCard">
          <img
            alt=""
            loading="lazy"
            src="//www.boat-lifestyle.com/cdn/shop/files/jshf_2-01-final-01_small.svg?v=1744365804"
            width="58"
            height="58"
          />

          <div className="subDiv">
            <b className="bold">12+3 Months </b>
            <br />
            Warranty
          </div>
        </div>
        <div className="innerDiv gst">
          <img
            alt=""
            loading="lazy"
            src="//www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123"
            width="58"
            height="58"
          />
          <div className="subDiv">
            <b className="bold">GST</b>
            <br />
            Billing
          </div>
        </div>
        <div className="innerDiv freeExpress">
          <img
            alt=""
            loading="lazy"
            src="//www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123"
            width="58"
            height="58"
          />
          <div className="subDiv">
            <b className="bold">Free Express</b>
            <br />
            Delivery*
          </div>
        </div>
        <div className="innerDiv Replacement">
          <div>
            <img
              alt=""
              loading="lazy"
              src="//www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123"
              width="58"
              height="58"
            />
          </div>

          <div className="subDiv">
            <b className="bold">7-day</b>
            <br />
            Replacement
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryReturn;
