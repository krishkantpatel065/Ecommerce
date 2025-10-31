import React, { useContext, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import "./navbar.css";

function New() {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="topHeader">
        <div class="saleBanner">
          <p>🎉 Summer Sale For All Swim Suits & Free Delivery - OFF 50%!</p>
          <a href="#">Shop Now</a>
        </div>
      </header>
      <nav className="navBar">
        <div className="logo">
          <NavLink to="/">Exclusive</NavLink>
          <img
            src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?resize=400x0"
            alt="E-Commerce Logo"
          />
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
        </div>

        {/* <ul className={menuOpen ? "nav-links open" : "nav-links"}> */}
        <ul className="navLinks">
          {user ? (
            <div className="rootDiv">
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
                  to="/paginatedProducts"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Products
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
              <li>
                <p onClick={handleLogout} className="logout-btn">
                  Logout
                </p>
              </li>
            </div>
          ) : (
            <>
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
                  to="/paginatedProducts"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Products
                </NavLink>
              </li>
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
            </>
          )}
        </ul>
        <div class="iconsDiv">
          <div class="search-input">
            <span>
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="search" placeholder="Search products..." />
          </div>
          <div class="icons">
            <span class="like">
              <i class="fa-regular fa-heart"></i>
            </span>
            <span class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
            <span>
              <i class="fa-solid fa-circle-user"></i>
            </span>
          </div>
        </div>

        <Outlet />
      </nav>
    </>
  );
}

export default New;
