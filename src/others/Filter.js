import React, { useState } from "react";

const Filter = () => {
  const [filter, setFilter] = useState([]);
  // console.log(filter);
  const handleChange = (e) => {
    const { checked, value, name } = e.target;
    setFilter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
  return (
    <div className=" shadow-md ">
      <div className="text-xl  mb-3 mt-2 font-semibold mx-3">
        <h1>Filters</h1>
        {filter && (
          <div className="text-[8px] flex flex-wrap w-5 gap-10 ">
            <p>{filter}</p>
          </div>
        )}
      </div>
      <div className="w-full h-[1px] bg-slate-200 px-1"></div>
      <div className="mx-3">
        <div className="text-[14px] mb-2 font-semibold mt-3">ORDER STATUS</div>
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-4 mt-4">
            <input
              type="checkbox"
              value="on the way"
              id=""
              onChange={handleChange}
            />
            <label htmlFor="" className="text-sm">
              On the way
            </label>
          </div>
          <div className="flex items-center gap-2 mb-4 mt-4">
            <input
              type="checkbox"
              value="deliver"
              id=""
              onChange={handleChange}
            />
            <label htmlFor="" className="text-sm">
              Delivered
            </label>
          </div>
          <div className="flex items-center gap-2 mb-4 mt-4">
            <input
              type="checkbox"
              value="cancel"
              id=""
              onChange={handleChange}
            />
            <label htmlFor="" className="text-sm">
              Cancelled
            </label>
          </div>
          <div className="flex items-center gap-2 mb-4 mt-4">
            <input
              type="checkbox"
              value="returned"
              id=""
              onChange={handleChange}
            />
            <label htmlFor="" className="text-sm">
              Returned
            </label>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-slate-200 px-1"></div>
      <div className="mx-3">
        <div className="text-[14px] mb-2 font-semibold mt-3">ORDER TIME</div>
        <div className="mb-3 ">
          <div className="flex items-center gap-2 mb-4 mt-4">
            <input
              type="checkbox"
              value="last 30 days"
              id=""
              onChange={handleChange}
            />
            <label htmlFor="" className="text-sm">
              LAST 30 Days
            </label>
          </div>
          <div className="flex items-center gap-2 mb-4 mt-4">
            <input type="checkbox" value="2025" id="" onChange={handleChange} />
            <label htmlFor="" className="text-sm">
              2025
            </label>
          </div>
          <div className="flex items-center gap-2 mb-4 mt-4">
            <input type="checkbox" value="2024" id="" onChange={handleChange} />
            <label htmlFor="" className="text-sm">
              2024
            </label>
          </div>
          <div className="flex items-center gap-2 mt-4 pb-4">
            <input
              type="checkbox"
              value="older"
              id=""
              onChange={handleChange}
            />
            <label htmlFor="" className="text-sm">
              Older
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
