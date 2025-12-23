import { useState, useEffect } from "react";
import AllProduct from "../screens/AllProduct";
import Product from "../components/Product";
import SlidingImage from "../components/SliderImage";
import DeliveryReturn from "../components/DeliveryRetrun";
import SmallImage from "../components/Smallimage";
import Footer from "../components/Footer";
import "../styleFolder/Home.css";
import ShopSection from "../components/ShopSection";
import Catogary from "../components/categary";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <SlidingImage />
          <SmallImage />
          <DeliveryReturn />
          <ShopSection name={"Sale Is Live"} />
          <AllProduct Showloader={false} isShow={false} />
          {/* <Product /> */}
          <div className="">
            <ShopSection name={"Explore Nirvana "} />
            <img src="/assets/nirvana.webp" alt="nirvana image" className="max-7xl  mx-auto px-10 rounded-lg"/>
          </div>
          <ShopSection hide={false} name={"Big Deals "} />
          <Catogary />
          <AllProduct Showloader={false} Show={false} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
