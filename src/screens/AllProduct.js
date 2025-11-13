import { useEffect, useState, useContext } from "react";
import "../styleFolder/Allproducts.css";
import Pagination from "../components/Pagination";
import { AuthContext } from "../context/AuthContext";
import Spinner from "../components/Spinner";
import { fetchProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slice";
import { useNavigate } from "react-router-dom";

function AllProduct({ top, isShow }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const Allproducts = useSelector((state) => state.products.items || []);
  const cartIt = useSelector((state) => state.cart.items);
  console.log(cartIt);
  useEffect(() => {
    dispatch(fetchProducts());
    setProducts(Allproducts);
  }, []);
  const gotoCart = () =>{
    navigate("/order")
  }

  const PerPage = 15;
  const numberOfPages = Math.ceil(products.length / PerPage);
  const Last = page * PerPage;
  const First = Last - PerPage;
  const currentProducts = isShow
    ? products.slice(First, Last)
    : products.slice(0, 5);
  console.log(currentProducts);

  return (
    <div className="grid">
      {currentProducts?.length > 0 ? (
        currentProducts.map((item => 
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />
            <div className="contents">
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
              <div className="price">₹{item.price}</div>

              {cartIt.find((carts) => carts.id === item.id) ? (
                <button
                  className="GoToCart"
                  onClick={ gotoCart}
                >
                  Go To Cart
                </button>
                
              ) : (
                <button
                  className="addCart"
                  onClick={() => dispatch(addItem(item))}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignTracks: "center",
            position: "relative",
          }}
        >
          <Spinner top={"-30px"} />
        </div>
      )}

      {isShow && currentProducts.length > 0 && (
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
