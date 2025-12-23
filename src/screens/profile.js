import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
import OrderHistory from "../components/OrderHistory";

const MENU = [
  { key: "profile", label: "My Profile" },
  { key: "order", label: "Order" },
  { key: "payment", label: "Payment" },
  { key: "setting", label: "Setting" },
];

function Profile() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [active, setActive] = useState("profile");
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))?.[0];
    setUserDetail(user);
  }, []);

  if (!userDetail) {
    return <p className="text-center mt-20">Login to see profile</p>;
  }

  return (
    <div className="max-w-7xl mx-auto mt-10  flex gap-5 px-10">
      {/* <aside className="hidden md:flex w-64 flex-col justify-evenly shadow-md rounded-md px-6 py-4">
        <div className="text-center mb-1">
          <img
            src="/assets/image.png"
            className="w-10 h-10 rounded-full mx-auto"
            alt="profile"
          />
          <p className="mt-2 text-sm">
            Welcome, <b>{userDetail?.name}</b>
          </p>
        </div>

       <div> {MENU.map((item) => (
          <div
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`cursor-pointer mt-2 mb-3 py-1 px-2 rounded-sm
              ${
                active === item.key
                  ? "bg-red-400 text-white"
                  : "hover:bg-red-400"
              }`}
          >
            {item.label}
          </div>
        ))}</div>

        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="mt-4 text-sm text-red-500"
        >
          Log Out
        </button>
      </aside> */}

      <div className="flex-1 rounded-md">
        {
          {
            profile: <UserProfile  />,
            order: <OrderHistory show={false} />,
            payment: <div>Payment coming soon</div>,
            setting: <div>Setting coming soon</div>,
          }[active]
        }
      </div>
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
