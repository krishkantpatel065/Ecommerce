import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { addItem } from "../redux/slice";
import { useDispatch } from "react-redux";
import "../styleFolder/productdetail.css";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div className="px-5 mx-auto max-w-7xl ">
        <div className="mt-10 px-5">
          <h1 className="text-gray-500">
            <NavLink to="/">Home</NavLink>
            <span>/</span>
            <NavLink to="/product" className="text-black">Product</NavLink>
            <span>/</span>
            <NavLink to="/product/productdetails" className="text-black">ProductDetails</NavLink>
            
          </h1>
        </div>
        <div className="product-container">

          <div className="left-section">
            <img src={product.image} alt={product.title} />
            <button
              className="add-to-cart-btn"
              onClick={() => dispatch(addItem(product))}
            >
              ADD TO CART
            </button>
          </div>

          <div className="right-section">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <h3 className="product-price">
              Special Price <span>₹{product.price}</span>
            </h3>
            <p className="product-category">{product.category}</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default ProductDetail;
