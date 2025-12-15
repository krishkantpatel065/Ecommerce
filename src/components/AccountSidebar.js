import React from "react";

const AccountSidebar = () => {
  return (
    <>
      <div className="m-5 mt-5  rounded-sm p-4 w-[30%] bg-white">
        <h3 className="text-md font-semibold mb-0 ">Manage My Account</h3>
        <div className="flex flex-col items-start gap-0 text-gray-700 text-sm mb-1">
          <button className="p-1 rounded hover:bg-red-400 hover:text-white transition">
            Profile
          </button>
          <button className="p-1 rounded hover:bg-red-400 hover:text-white transition">
            Payment Methods
          </button>
          <button className="p-1 rounded hover:bg-red-400 hover:text-white transition">
            Address
          </button>
        </div>

        <h3 className="text-md font-semibold mb-0">My Orders</h3>
        <div className="flex flex-col items-start gap-1 text-gray-700 text-sm mb-1">
          <button className="p-1 rounded hover:bg-red-400 hover:text-white transition">
            Return Order
          </button>
          <button className="p-1 rounded hover:bg-red-400 hover:text-white transition">
            Cancel Order
          </button>
          <button className="p-1 rounded hover:bg-red-400 hover:text-white transition">
            Order History
          </button>
        </div>

        <h3 className="text-md font-semibold mb-0">My Wishlist</h3>
        <div className="flex flex-col items-start gap-1 text-gray-700 mb-0 text-sm">
          <button className="p-1 rounded hover:bg-red-400 hover:text-white transition">
            Saved Items
          </button>
          <button className="p-1 rounded hover:bg-red-500 hover:text-white transition">
            Payment
          </button>
          <button className="p-1 rounded hover:bg-red-500 hover:text-white transition">
            Address
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountSidebar;
