import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const UserNav = () => {
  const [userName, setUserName] = useState("fg");
  useEffect(() => {
    const inform = JSON.parse(localStorage.getItem("user")) || [];
    if (inform) {
      const parsedName = inform[0]
      setUserName(parsedName?.name)
    }
    else{
      setUserName(null)
    }
    // setUserName(inform?.name);
    // console.log(inform);
    // console.log(userName);
  }, []);

  return (
    <>
      <div className="flex justify-between m-5 mb-0">
        <h3 className="text-gray-700 ">
          <Link to="/"> Home </Link>/{" "}
          <span className="text-black mx-3">My Account</span>
        </h3>
        <h3>
          Welcome!<span className="text-red-700 mx-2">{userName}</span>
        </h3>
      </div>
    </>
  );
};

export default UserNav;
