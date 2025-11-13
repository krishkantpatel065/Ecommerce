import React, { useContext } from "react";
import "../styleFolder/Profile.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useContext(AuthContext);
  const userDetail = JSON.parse(localStorage.getItem("user"))?.[0];
  console.log(userDetail);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="profile-page">
      <aside className="sidebar">
        <ul>
          <li>My Account</li>
          <li>My Orders</li>
          <li>Setting</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </aside>
      {user && (
        <section className="profile-content">
          <div className="account">
            <h2>Welcome,{userDetail?.name}👋</h2>
            <p>
              <strong>Name :</strong>
              {userDetail?.name}
            </p>
            <p>
              <strong>Email:</strong>
              {userDetail?.email}
            </p>
            <p>
              <strong>Password:</strong>
              {userDetail?.password}
            </p>
            <p>
              <strong>Phone:</strong>
              {userDetail?.number}
            </p>
            <p>
              <strong>Address:</strong>Bhagyashree Colony,Vijay Nagar Indore
              Madhya Pradesh
            </p>
            <button className="edit-profile">Edit Profile</button>
          </div>

          <div className="profile-photo">
            <img src="/profile.png" alt="" />
          </div>
        </section>
      )}
    </div>
  );
}

export default Profile;
