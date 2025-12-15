import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  const { user, logout } = useContext(AuthContext);
  const [userDetail, setUserDetail] = useState("");
  const userDetaill = JSON.parse(localStorage.getItem("user"))?.[0];
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"))?.[0];
    setUserDetail(userData);
  }, []);

  // console.log(userDetail);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="flex p-6">
      <aside className="w-64 bg-white shadow-md p-5  mt-8  rounded-lg mb-5 h-content">
        <h2 className="text-xl font-semibold mb-6">My Account</h2>
        <ul className="space-y-3 text-md">
          <li className="text-red-500 font-medium">Profile</li>
          <li>
            <Link
              className="hover:text-red-500 cursor-pointer"
              to="/profile/orderhistory"
            >
              Orders
            </Link>
          </li>
          <li className="hover:text-red-500 cursor-pointer">Address</li>
          <li
            className="hover:text-red-500 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      </aside>
      {user ? (
        <main className=" flex w-full p-8  flex-col">
          <div className="bg-white rounded-lg shadow p-6 flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl">
              KP
            </div>
            <div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <div className="p-3">
            <div className="">
              <h3 className="font-medium mt-2">
                <strong className="font-normal">UserName :</strong>
                {userDetail?.name}
              </h3>
              <h3  className="font-medium mt-2">
              <strong className="font-normal">Email:</strong>
                {userDetail?.email}
              </h3>
              <h3  className="font-medium mt-2">
                <strong className="font-normal">Password:</strong>
                {userDetail?.password}
              </h3>
             
              <h3  className="font-medium mt-2">
                <strong className="font-normal">Address:</strong>Bhagyashree Colony,Vijay Nagar Indore
                Madhya Pradesh
              </h3>
            </div>

            <Link to="/edituser">
             
              <button className="py-2 px-4 mt-5 bg-red-500 text-white rounded-sm">Edit Profile</button>
            </Link>
          </div>
        </main>
      ) : (
        <section style={{ textAlign: "center", margin: "auto" }}>
          <div>Login To See Detail</div>
          <Link to="/login"> Login</Link>
        </section>
      )}
    </div>
  );
}

export default Profile;

// import React, { useState } from "react";

// const UserDashboard = () => {
//   const [user, setUser] = useState({
//     name: "Krish Patel",
//     email: "krish@gmail.com",
//     phone: "9876543210",
//   });

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className=" flex px-10">
//       <aside className="w-64 bg-white shadow-md p-5  mt-8  rounded-lg mb-9 h-content">
//         <h2 className="text-xl font-semibold mb-6">My Account</h2>
//         <ul className="space-y-3 text-md">
//           <li className="text-red-500 font-medium">Profile</li>
//           <li className="hover:text-red-500 cursor-pointer">Orders</li>
//           <li className="hover:text-red-500 cursor-pointer">Address</li>
//           <li className="hover:text-red-500 cursor-pointer">Logout</li>
//         </ul>
//       </aside>

//       <main className="flex-1 p-8">
//         <div className="bg-white rounded-lg shadow p-6 flex items-center gap-6">
//           <div className="w-20 h-20 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl">
//             KP
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold">{user.name}</h3>
//             <p className="text-sm text-gray-500">{user.email}</p>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow p-6 mt-6">
//           <h3 className="text-md font-semibold mb-4">Edit Profile</h3>

//           <div className="grid grid-cols-2 gap-5 mb-">
//             <input
//               name="name"
//               value={user.name}
//               onChange={handleChange}
//               placeholder="Name"
//               className="border p-2 rounded"
//             />

//             <input
//               name="email"
//               value={user.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="border p-2 rounded"
//             />

//             <input
//               name="phone"
//               value={user.phone}
//               onChange={handleChange}
//               placeholder="Phone"
//               className="border p-2 rounded"
//             />
//           </div>

//           <button className="mt-5 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
//             Save Changes
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default UserDashboard;
