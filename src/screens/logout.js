import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

function Logout() {
  const navigate = useNavigate();
  //  useEffect(() => {
  //   const handleLogout = () => {
  //     localStorage.removeItem("user");
  //     navigate("login");
  //   };
  // }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("login");
  };

  return (
    <div>
      <h2>Logout</h2>
      <button
        onClick={handleLogout}
        style={{
          color: "#f3b748",
          border: "none",
          borderRadius: "7px",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
