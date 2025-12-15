import React from "react";
import { Link } from "react-router-dom";
import "../styleFolder/orderhistory.css";
import SideBar from "./sideBar";
const OrderHistory = () => {
  const previousOrder = JSON.parse(localStorage.getItem("orderDetails"));
  console.log(previousOrder);

  return (
    <div
      style={{
        display: "flex",
        //  justifyContent:"space-between"
      }}
    >
      <SideBar />
      <div className="history-continer">
        <div>
          <div>
            {previousOrder
              ? previousOrder.map((item) => (
                  <div className="main-cont">
                    <div className="order-id" key={item.id}>
                      <p>
                        Id:<span>{item.id}</span>
                      </p>
                      <p>
                        Date:<span>{item.date}</span>
                      </p>
                      <p>
                        Payment:<span>{item.payment}</span>
                      </p>
                    </div>
                    <div className="order-detail">
                      {item.items.map((it) => (
                        <div key={it.id} className="order-content">
                          <div className="order-img">
                      
                            <img src={it.image} alt="" width={"80px"} />
                          </div>
                          <div>
                            <h3>{it.title}</h3>
                            <p>{it.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
