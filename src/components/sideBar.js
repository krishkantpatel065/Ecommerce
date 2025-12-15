import React from "react";
import "../styleFolder/sidebar.css";
const SideBar = () => {
  return (
    <div className="side-parent">
      <div class="left-div">
        <div class="filter-div">
          <div class="filter-text">
            <span>Filters</span>
          </div>
        </div>
        <div class="order-status-main">
          <div class="order-status">Order Status</div>
          <div class="order-option">
            <label class="label">
              <input type="checkbox" readonly="" />
            </label>
            <div class="order-text">On the way</div>
          </div>
          <div class="order-option">
            <label class="label">
              <input type="checkbox" />
            </label>
            <div class="order-text">Delivered</div>
          </div>
          <div class="order-option">
            <label class="label">
              <input type="checkbox" />
            </label>
            <div class="order-text">Cancelled</div>
          </div>
          <div class="order-option">
            <label class="label">
              <input type="checkbox" />
              
            </label>
            <div class="order-text">Returned</div>
          </div>
        </div>
        <div class="divider" style={{}}></div>
        <div>
          <div class="order-status">Order Times</div>
          <div class="order-option">
            <label class="label">
              <input type="checkbox" />
            </label>
            <div class="order-text">30 Days Old</div>
          </div>
          <div class="order-option">
            <label class="label">
              <input type="checkbox" />
            </label>
            <div class="order-text">2025</div>
          </div>
          <div class="order-option">
            <label class="label">
              <input type="checkbox" />
              <div></div>
            </label>
            <div class="order-text">2024</div>
          </div>
          <div class="order-option">
            <label class="label">
              <input type="checkbox" />
            </label>
            <div class="order-text">Old</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
