import { useEffect, useState,useContext } from "react";
import "../styleFolder/Allproducts.css";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice";
import Pagination from "../components/Pagination";
import { AuthContext } from "../context/AuthContext";

function AllProduct({ isShow }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
   const { user } = useContext(AuthContext)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const PerPage = 15;
  const numberOfPages = Math.ceil(products.length / PerPage);
  const Last = page * PerPage;
  const First = Last - PerPage;
  const currentProducts = isShow
    ? products.slice(First, Last)
    : products.slice(0, 5);

  return (
    <div className="container">
      <div className="products">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div className="productItem " key={product.id}>
              <div className="product-img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="info-div">
                <div className="product-title">
                  <h4>{product.title}</h4>
                </div>
                <div className="product-price">
                  <p>₹{product.price}</p>
                  <p>⭐{product?.rating?.rate}</p>
                </div>

                <div className="cart-btn">
                  <button
                    className="add-to-cart"
                    onClick={() =>
                      dispatch(addItem("Shoes")  )
                    }
                  >
                    Add To Cart
                  </button>
                  {/* <button onClick={() => dispatch(Detail({ id: 1, name: "Shoes", price: 999 }))}>Add to Cart</button> */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      {isShow && (
        <Pagination
          numberOfPages={numberOfPages}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default AllProduct;
