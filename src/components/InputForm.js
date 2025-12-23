import React, { useState } from "react";

const InputForm = ({ userDetail, setUserDetail }) => {
  console.log(userDetail);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
    console.log(value);
  };
  return (
    <div className="w-[500px]">
      <div className="flex  flex-col gap-1 w-9/12 ">
        <label htmlFor="name">FirstName</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userDetail.name}
          onChange={handleChange}
          className="bg-[#f5f5f5] rounded text-sm  py-1 px-4 outline-none"
        />
      </div>
      <div className="flex  flex-col gap-1 mt-5 w-9/12">
        <label htmlFor="number">Phone Number</label>
        <input
          type="number"
          name="number"
          id="number"
          value={userDetail.number}
          onChange={handleChange}
          className="bg-[#f5f5f5] rounded text-sm py-1 px-4 outline-none"
        />
      </div>
      <div className="flex  flex-col gap-1 mt-5 w-9/12">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userDetail.email}
          onChange={handleChange}
          className="bg-[#f5f5f5] rounded text-sm  py-1 px-4 outline-none"
        />
      </div>
      <div className="flex  flex-col gap-1 mt-5 w-9/12">
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={userDetail.city}
          onChange={handleChange}
          className="bg-[#f5f5f5] rounded text-sm px-3 py-1 outline-none"
        />
      </div>
      <div className="flex  flex-col gap-1 mt-5 w-9/12">
        <label htmlFor="street">Street Number</label>
        <input
          type="text"
          id="street"
          name="street"
          value={userDetail.street}
          onChange={handleChange}
          className="bg-[#f5f5f5] rounded text-sm py-1 px-3 outline-none"
        />
      </div>
    </div>
  );
};

export default InputForm;
