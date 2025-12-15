import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "../styleFolder/Allproducts.css";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import { fetchProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slice";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop";

function AllProduct({ filter, Showloader = false, isShow }) {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalProduct = useSelector((state) => state.products.items || []);
  const status = useSelector((state) => state.products.status);
  const cartIt = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (totalProduct.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, totalProduct.length]);

  const gotoCart = () => navigate("/order");

  const PerPage = 15;
  const numberOfPages = Math.ceil(totalProduct.length / PerPage);
  const Last = page * PerPage;
  const First = Last - PerPage;
  const leng = totalProduct
    .filter((item) => item?.title?.toLowerCase().includes(filter?.toLowerCase()))
    .slice(First, Last).length;

  const currentProducts = isShow
    ? filter
      ? totalProduct
          .filter(
            (item) => item.title.toLowerCase().includes(filter.toLowerCase())
            // item.description.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(First, Last)
      : totalProduct.slice(First, Last)
    : totalProduct.slice(0, 6);
  if (Showloader && totalProduct.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignTracks: "center",
          position: "relative",
        }}
      >
        <Spinner loader={true} />
      </div>
    );
  }
  return (
    <>
      <div
        style={{
          margin: "auto",
          textAlign: "center",
          fontSize: "15px",
          wordSpacing: "4px",
          letterSpacing: "4px",
          fontFamily: "cursive",
          fontWeight: "600",
        }}
      >
        {filter && (
          <p>
            Showing {leng} results for "{filter}"
          </p>
        )}
      </div>

      <div className="grid">
        {currentProducts.map((item) => (
          <div className="card" key={item.id}>
            <NavLink to={"/order/" + item.id}>
              <img src={item.image} alt="" />
            </NavLink>

            <div className="contents">
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
              <div className="price">₹{item.price}</div>

              {cartIt.find((carts) => carts.id === item.id) ? (
                <button className="GoToCart" onClick={gotoCart}>
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
        ))}
        {isShow && currentProducts.length > 0 && (
          <Pagination
            numberOfPages={numberOfPages}
            page={page}
            setPage={setPage}
          />
        )}
        <ScrollToTop />
      </div>
    </>
  );
}
export default AllProduct;
