import React from "react";

const InputForm = () => {
  return (
    <div className="w-[470px]">
      <div className="flex  flex-col gap-1 w-9/12 ">
        <label htmlFor="">FirstName</label>
        <input
          type="text"
          name="name"
         className="bg-[#f5f5f5] rounded text-sm  py-1 outline-none"
        />
      </div>
      <div className="flex  flex-col gap-1 mt-5 w-9/12">
        <label htmlFor="">Phone Number</label>
        <input
          type="text"
          name="name"
          className="bg-[#f5f5f5] rounded text-sm py-1 outline-none"
        />
      </div>
      <div className="flex  flex-col gap-1 mt-5 w-9/12">
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="name"
         className="bg-[#f5f5f5] rounded text-sm  py-1 outline-none"
        />
      </div>
      <div className="flex  flex-col gap-1 mt-5 w-9/12">
        <label htmlFor="">City</label>
        <input
          type="text"
          name="name"
         className="bg-[#f5f5f5] rounded text-sm  py-1 outline-none"
        />
      </div>
      <div className="flex  flex-col gap-1 mt-5 w-9/12">
        <label htmlFor="">Street Number</label>
        <input
          type="text"
          name="name"
          className="bg-[#f5f5f5] rounded text-sm py-1 outline-none"
        />
      </div>
    </div>
  );
};

export default InputForm;
