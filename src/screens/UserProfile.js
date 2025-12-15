import React, { useContext, useEffect, useState } from "react";
import AccountSidebar from "../components/AccountSidebar";
import UserNav from "../components/UserNav";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserProfile = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: "",
    lastname: "",
    password: "",
    email: "",
    address: "",
    newpass: "",
    conformpass: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (!saved) {
      //   const userData = JSON.parse(saved)[0];
      setInfo(null);
    } else {
      const userData = JSON.parse(saved)[0];
      setInfo(userData);
    }
    // console.log(info.email);
  }, []);

  const handleSubmit = () => {
    login({
      name: info?.name,
      lastname: info?.lastname,
      password: info?.newpass,
      email: info?.email,
      address: info?.address,
    });

    toast("Profile Updated Successfully");
    navigate("/profile");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="p-5">
      <UserNav />
      <div className="flex gap-0">
        <AccountSidebar />
        <div className="m-5 mx-2 mt-2 shadow-xl rounded-lg p-4 w-full bg-white">
          <h1 className="text-red-600 text-xl font-semi-bold">Edit Your Profile</h1>

          <div className="flex gap-8 mt-2 items-center">
            <div className="flex flex-col  gap-1">
              <label className="text-[14px] font-normal">First Name</label>
              <input
                type="text"
                name="name"
                value={info?.name}
                onChange={handleChange}
                className="bg-[#f5f5f5] rounded text-sm w-80 p-2 outline-none"
              />
            </div>

            <div className="flex flex-col mb-1 w-full gap-1">
              <label className="text-[14px] font-normal">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={info?.lastname}
                onChange={handleChange}
                className="bg-[#f5f5f5] rounded-md p-2 text-sm w-80 outline-none"
              />
            </div>
          </div>

          <div className="flex gap-8 items-center mt-2">
            <div className="flex flex-col gap-1">
              <label className="text-[14px] font-normal">Email</label>
              <input
                type="text"
                name="email"
                value={info?.email}
                onChange={handleChange}
                className="bg-[#f5f5f5] rounded-md text-sm p-2 w-80 outline-none"
              />
            </div>

            <div className="flex flex-col gap-1 ">
              <label className="text-[14px] font-normal">Address</label>
              <input
                type="text"
                name="address"
                value={info?.address}
                onChange={handleChange}
                className="bg-[#f5f5f5] rounded-md text-sm p-2 w-80 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col w-full mt-3 gap-3">
            <label className="text-[14px] font-normal">Password Changes</label>
            <input
              type="text"
              name="password"
              value={info?.password}
              placeholder="Current Password"
              onChange={handleChange}
              className="bg-[#f5f5f5] rounded-md p-2 w-[72%] text-sm outline-none"
            />

            <input
              type="text"
              name="newpass"
              value={info?.newpass}
              placeholder="New Password"
              onChange={handleChange}
              className="bg-[#f5f5f5] rounded-md p-2 w-[72%] outline-none text-sm "
            />

            <input
              type="text"
              name="conformpass"
              value={info?.conformpass}
              placeholder="Confirm Password"
              onChange={handleChange}
              className="bg-[#f5f5f5] rounded-md text-sm w-[72%] p-2 outline-none"
            />
          </div>

          <div className="flex items-center gap-4 mb-0 mt-3 w-[72%] justify-end">
            <h1 className="cursor-pointer text-sm">Cancel</h1>

            <button
              className="py-1 px-3 font-medium text-sm text-white bg-red-600 rounded"
              onClick={handleSubmit}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
