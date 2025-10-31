import React, { useContext, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AddToCart from "./AddToCart";
import "../styleFolder/navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div className="parentDiv">
        <header className="topHeader">
          <span>
            Get additional 5% off on Prepaid Orders | Code:
            <b> BOATHEAD </b>|<u> Shop Now </u>
          </span>
        </header>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">
              <NavLink to="/">
                <img
                  src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?resize=400x0"
                  alt="E-Commerce Logo"
                />
              </NavLink>
            </div>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/product"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    Products
                  </NavLink>
                </li>

                {user && (
                  <>
                    <li>
                      <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/order"
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        Orders
                      </NavLink>
                    </li>
                  </>
                )}

                {!user ? (
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      Login
                    </NavLink>
                  </li>
                ) : (
                  <li className="nav-link">
                    <p onClick={handleLogout} className="logout-btn">
                      Logout
                    </p>
                  </li>
                )}
              </ul>
            </div>
            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="Search for products..." />
            </div>
            <div className="icon-section">
              <svg
                width="25"
                height="25"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="svgkp"
              >
                <path
                  d="M22.9129 12.935L13.7571 23.0474C13.5348 23.2929 13.1284 23.1084 13.1669 22.7794L14.0816 14.9731H10.6991C10.4034 14.9731 10.2484 14.6219 10.4478 14.4035L20.3133 3.59739C20.5589 3.32834 20.9984 3.58134 20.8891 3.92887L18.2354 12.3664H22.6607C22.9557 12.3664 23.1109 12.7163 22.9129 12.935Z"
                  fill="#FEA203"
                ></path>
                <path
                  id="svgkp-path"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.6079 5.35819C16.4805 5.1933 16.3421 5.03582 16.1932 4.8869C15.2702 3.96387 14.0183 3.44531 12.7129 3.44531C11.4075 3.44531 10.1556 3.96387 9.2326 4.8869C8.30957 5.80993 7.79102 7.06183 7.79102 8.36719C7.79102 9.67255 8.30957 10.9244 9.2326 11.8475C9.48368 12.0986 9.75909 12.3197 10.0533 12.5086L11.0235 11.4503C10.7335 11.2914 10.4649 11.0911 10.227 10.8531C9.56766 10.1938 9.19727 9.29959 9.19727 8.36719C9.19727 7.43479 9.56766 6.54057 10.227 5.88127C10.8863 5.22196 11.7805 4.85156 12.7129 4.85156C13.6453 4.85156 14.5395 5.22196 15.1988 5.88127C15.3636 6.04604 15.5103 6.22549 15.6377 6.41654L16.6079 5.35819ZM20.6413 18.6497L19.6746 19.7132C20.1676 20.4122 20.4473 21.2264 20.4473 22.0781V23.8359C20.4473 24.2243 20.7621 24.5391 21.1504 24.5391C21.5387 24.5391 21.8535 24.2243 21.8535 23.8359V22.0781C21.8535 20.7863 21.4016 19.6103 20.6413 18.6497ZM12.3111 17.5078H10.3026C7.27113 17.5078 4.97852 19.6394 4.97852 22.0781V23.8359C4.97852 24.2243 4.66372 24.5391 4.27539 24.5391C3.88707 24.5391 3.57227 24.2243 3.57227 23.8359V22.0781C3.57227 18.6922 6.67684 16.1016 10.3026 16.1016H12.4885L12.3111 17.5078Z"
                  fill="currentColor"
                  stroke="currentColor"
                ></path>
              </svg>

             { user && <div
                style={{
                  display: "flex",

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AddToCart />
              </div>}
              <i className="fa-regular fa-heart"></i>
            </div>

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              <i
                className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}
              ></i>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
