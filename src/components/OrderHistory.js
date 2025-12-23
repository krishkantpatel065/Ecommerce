import React, { useState } from "react";
import { Link } from "react-router-dom";

import SideBar from "./sideBar";
import Filter from "./Filter";
const OrderHistory = ({ show }) => {
  const [input, setInput] = useState("");
  const [showDes, setShowDes] = useState(false);
  const previousOrder = JSON.parse(localStorage.getItem("orderDetails")) || [];
  console.log(previousOrder);

  // const title = previousOrder.map((ite) =>
  //   ite.items.map((it) => it.title)
  // );
  const filterUser = previousOrder.filter((order) =>
    order.items?.some((item) =>
      (item.title || "").toLowerCase().includes(input.toLowerCase())
    )
  );

  // console.log(filterUser);

  return (
    <>
      <div className="max-w-7xl mx-auto py-10 flex gap-8 items-start ">
        <div className="w-[20%]">
          <Filter />
        </div>

        <div className=" w-[80%] mt-2  px-3 py-2">
          <div className="flex items-center justify-between rounded-md  shadow-sm border border-[#dbdbdb] ">
            <input
              type="search"
              placeholder="Search your order here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="py-3 px-3 w-[95%] text-sm  outline-none   "
            />
            <button className="bg-blue-600 w-[10%] py-3 px-2 text-white  ">
              Search{" "}
            </button>
          </div>
          <div>
            {filterUser.map((order) => (
              <div
                key={order.id}
                className="shadow-lg mt-10 mb-6 p-6 rounded-md"
              >
                <div className="flex flex-col gap-6 ">
                  {order.items.map((it, index) => (
                    <div
                      key={index}
                      className="flex justify-between  items-start gap-2  border-b pb-4 relative last:border-none"
                    >
                      <div className="flex gap-4 w-[50%]">
                        <img
                          src={it.image}
                          alt="product"
                          className="w-[70px] h-[70px]"
                        />

                        <div className="group">
                          <h1 className="text-sm font-medium">{it.title}</h1>
                          <p className="text-[11px] text-gray-500">
                            {it.description.slice(0, 30)}...
                          </p>

                          <div
                            className="absolute top-2 mt-10 left-14
                               hidden group-hover:block bg-white
                               text-black shadow-xl z-30 px-4 py-2
                               rounded max-w-3xl"
                          >
                            {it.description}
                          </div>
                        </div>
                      </div>

                      <div className="text-sm font-medium">₹{it.price}/-</div>

                      <div>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <p className="text-[12px] font-semibold">
                            Delivered on{" "}
                            {new Date(order.date).toDateString().slice(4)}
                          </p>
                        </div>
                        <p className="text-[11px] text-gray-500">
                          Your item is delivered
                        </p>

                        <div className="flex items-center gap-1 mt-1">
                          <img src="/assets/star.svg" alt="" />
                          <span className="text-[12px] font-medium">
                            Rate & Review Product
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
