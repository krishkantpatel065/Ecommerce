import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItem, clearWish, removeWish } from "../redux/CartSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const { wish } = useSelector((state) => state.cart);
  const wishlistItems = wish.flat?.() || [];
  console.log(wishlistItems);
  return (
    <>
      <div className="max-w-7xl mx-10 px-10 mt-10 ">
        <div>
          <h1 className="text-gray-500">
            <NavLink to="/">Home</NavLink>
            <span>/</span>
            <NavLink to="/product">Product</NavLink>
            <span>/</span>
            <NavLink to="/product/wishlist" className="text-black">
              WishList
            </NavLink>
          </h1>
        </div>
        <div className="flex justify-between items-center mb-8 mt-6 px-1">
          <h1>Wishlist ({wish.length})</h1>
          <button
            className={`py-2 px-4 border border-[#666565]`}
            onClick={() => {
              alert("wdgfh");
              wishlistItems.forEach((item) => dispatch(addItem(item)));
              dispatch(() => dispatch(clearWish()));
            }}
            disabled={wish.length === 0 ? true : false}
          >
            Move All To Bag
          </button>
        </div>
        <div className="">
          {wish.length > 0 ? (
            <div className="text-center w-full">
              {wish.map((wish) => (
                <div className=" mb-10 mt-10 " key={wish.id}>
                  <div className="mt-10 flex justify-between  items-start gap-10 shadow-md py-4 px-5">
                    <div className="flex gap-5 " key={wish.id}>
                      <img src={wish.image} alt="" className="w-[10%]" />
                      <div className="flex flex-col gap-5 items-start">
                        <h1>{wish.title}</h1>
                        <h1 className="font-medium text-xl">₹{wish.price}</h1>
                      </div>
                    </div>
                    <div className="group">
                      <button
                        className="py-1  px-5 "
                        onClick={() => dispatch(removeWish(wish.id))}
                      >
                        <img src="/assets/delete.svg" loading="lazy" />
                      </button>
                    </div>
                    <div className="bg-red-800 hidden group-hover:block">
                      fffffffsd
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto text-center mt-11">
              <h3> No Product Added to favorite</h3>
              <NavLink to="/product">
                <button className=" bg-red-500 text-white px-3 py-2 mt-6 rounded-lg">
                  {" "}
                  Add product{" "}
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishList;
