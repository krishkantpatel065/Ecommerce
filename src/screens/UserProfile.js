import React, { useContext, useEffect, useState } from "react";
import UserNav from "../components/UserNav";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import OrderHistory from "../components/OrderHistory";

const UserProfile = () => {
  const { login, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [active, setActive] = useState("profile")
  const [showPass, setShowPass] = useState(true)
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
      setInfo(null);
    } else {
      const userData = JSON.parse(saved)[0];
      setInfo(userData);
    }
    // console.log(info.email);
  }, []);

  const handleEdit = () => {
    if (!info.newpass) {
      toast.error("Enter new password ");
      return;
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(info.newpass)) {
      toast.error(
        "Password must be 8+ chars with uppercase, lowercase & number"
      );
      return;
    } else if (!info.conformpass) {
      toast.error("please conform password ");

      return;
    } else if (info.newpass !== info.conformpass) {
      toast.error("Password is not Matched");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(info.email)) {
      toast.error("Invalid Email");
      return;
    }

    login({
      name: info?.name,
      lastname: info?.lastname,
      password: info?.newpass,
      email: info?.email,
      address: info?.address,
    });

    toast.success("Profile Updated Successfully");
    navigate("/profile");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const accountMenu = [
    { key: "profile", label: "My Profile" },
    { key: "address", label: "Address" },
    { key: "setting", label: "Setting" },
  ];

  const orderMenu = [
    { key: "order", label: "Order" },
    { key: "cancel", label: "Cancelled" },
    { key: "return", label: "Return" },
  ];

  const paymentMenu = [
    { key: "coupon", label: "My Coupon" },
    { key: "gift", label: "Gift Cards" },
    { key: "wishlist", label: "Wishlist" },
  ];
  const togglePassword = () => {
    setShowPass((prev) => !prev)
  }
  return (
    <div className="px-5 mt-10 mx-auto max-w-7xl">
      <UserNav />
      <div className="flex items-start gap-5 px-4 mt-10">
        <div className="bg-[#ffff] px-3 w-[20%] shadow-lg *:text-black  h-full rounded-sm">
          <div className="mt-5">
            <h1>Manage Account</h1>
            <ul className="px-2 *:text-[13px]">
              {accountMenu.map(item => (
                <li
                  key={item.key}
                  onClick={() => setActive(item.key)}
                  className={`p-1 rounded transition hover:bg-red-400 hover:text-white ${active === item.key ? "bg-red-400 text-white" : ""
                    }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h1>Manage Order</h1>
            <ul className="px-2 *:text-[13px]">
              {orderMenu.map(item => (
                <li
                  key={item.key}
                  onClick={() => setActive(item.key)}
                  className={`p-1 rounded transition hover:bg-red-400 hover:text-white ${active === item.key ? "bg-red-400 text-white" : ""
                    }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-5">
            <h1>Manage Payment</h1>
            <ul className="px-2 *:text-[13px]">
              {paymentMenu.map(item => (
                <li
                  key={item.key}
                  onClick={() => setActive(item.key)}
                  className={`p-1 rounded transition hover:bg-red-400 hover:text-white ${active === item.key ? "bg-red-400 text-white" : ""
                    }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6" onClick={()=>logout()}>LogOut</div>
        </div>
        <div className="  px-5 rounded-sm w-[80%] mt-[-50px]">
          {active === "order" && <OrderHistory />}
          {active === "profile" &&
            <div className=" h-full w-full mt-[55px] px-5 py-5 shadow-lg">
              <h1 className="text-red-600 text-xl font-semi-bold">
                Edit Your Profile
              </h1>
              <div className="mt-4">
                <div className="flex gap-10" >
                  <div className="flex flex-col  gap-1 w-full">
                    <label className="text-[14px] font-normal">First Name</label>
                    <input
                      type="text"
                      name="name"
                      value={info?.name || ''}
                      onChange={handleChange}
                      className="bg-[#f5f5f5] rounded text-sm w-full p-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-col mb-1 w-full gap-1">
                    <label className="text-[14px] font-normal">Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      value={info?.lastname || ''}
                      onChange={handleChange}
                      className="bg-[#f5f5f5] rounded-md p-2 text-sm w-full outline-none"
                    />
                  </div>

                </div>
                <div className="flex gap-10" >
                  <div className="flex flex-col  gap-1 w-full">
                    <label className="text-[14px] font-normal">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={info?.email || ''}
                      onChange={handleChange}
                      className="bg-[#f5f5f5] rounded text-sm w-full p-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-col mb-1 w-full gap-1">
                    <label className="text-[14px] font-normal">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={info?.address || ''}
                      onChange={handleChange}
                      className="bg-[#f5f5f5] rounded-md p-2 text-sm w-full outline-none"
                    />
                  </div>

                </div>

                <div className="flex flex-col mb-1 w-full gap-1">
                  <label className="text-[14px] font-normal">Password</label>
                  <div className=" w-[80%] flex justify-between bg-[#f5f5f5] rounded-md ">
                    <input
                      type={showPass ? "password" : "text"}
                      name="password"
                      value={info?.password || ''}
                      onChange={handleChange}
                      className="bg-[#f5f5f5] rounded-md p-2 w-[80%] text-sm outline-none"
                    />
                    <button onClick={togglePassword} className="px-3">{showPass ? "👁️" : "🙈"} </button>
                  </div>
                </div>
                <div className="flex flex-col mb-1 w-full gap-1">
                  <label className="text-[14px] font-normal">New Password</label>
                  <input
                    type="text"
                    name="newpass"
                    value={info?.newpass || ''}
                    onChange={handleChange}
                    className="bg-[#f5f5f5] rounded-md p-2 text-sm w-[80%] outline-none"
                  />
                </div>
                <div className="flex flex-col mb-1 w-full gap-1">
                  <label className="text-[14px] font-normal">Conform Password</label>
                  <div className=" w-[80%] flex justify-between bg-[#f5f5f5] rounded-md ">
                    <input
                      type={showPass ? "password" : "text"}
                      name="conformpass"
                      value={info?.conformpass || ''}
                      onChange={handleChange}
                      className="bg-[#f5f5f5] rounded-md p-2 w-[80%] text-sm outline-none"
                    />
                    <button onClick={togglePassword} className="px-3">{showPass ? "👁️" : "🙈"} </button>
                  </div>
                </div>
                
              </div>
              <div className="flex items-center gap-4 mt-3 justify-end">
                  <button>Cancel</button>
                  <button className="py-2 bg-red-500 px-4 rounded-md text-white" onClick={handleEdit}>Edit Profile</button>
                </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
