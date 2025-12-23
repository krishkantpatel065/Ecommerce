import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { addItem, addWish, removeWish } from "../redux/slice";
import { fetchProducts } from "../redux/ProductSlice";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import ScrollToTop from "../components/scrollToTop";

function AllProduct({ filter = "", Showloader = false, Show }) {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: totalProduct = [], status } = useSelector(
    (state) => state.products
  );
  const cartIt = useSelector((state) => state.cart.items);
  const wishItem = useSelector((state) => state.cart.wish);

  // console.log(totalProduct)
  useEffect(() => {
    if (!totalProduct.length) dispatch(fetchProducts());
  }, [dispatch, totalProduct.length]);

  const gotoCart = () => navigate("/order");
  const PerPage = 15;

  const filteredProducts = filter
    ? totalProduct.filter((item) =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    )
    : totalProduct;

  const numberOfPages = Math.ceil(filteredProducts.length / PerPage);

  const paginatedProducts = Show
    ? filteredProducts.slice((page - 1) * PerPage, page * PerPage)
    : totalProduct.slice(0, 5);
    
  if (Showloader && !totalProduct.length)
    return (
      <div className="flex justify-center items-center">
        <Spinner loader />
      </div>
    );

  return (
    <>
      <div className="mx-auto text-sm font-sans text-center">
        {filter && (
          <p>
            Showing {filteredProducts.length} results for "{filter}"
          </p>
        )}
      </div>

      <div className="mx-auto max-w-7xl px-10 py-6">
        {Show && (
          <>
            <div className="mt-7">
              <h1 className="text-gray-500">
                <NavLink to="/">Home</NavLink>/
                <NavLink to="/product" className="text-black">
                  Product
                </NavLink>
              </h1>
            </div>
          </>
        )}
        <div className="flex gap-4 flex-wrap px-1 mt-7">
          {paginatedProducts.map((item) => {
            const inWish = wishItem.some((w) => w.id === item.id);
            const inCart = cartIt.some((c) => c.id === item.id);

            return (
              <div
                key={item.id}
                className="shadow-md max-w-[14rem] mx-auto  bg-gray-100 w-[25%] py-2 rounded-md"
              >
                <div className="flex justify-between px-2">
                  <img src="/assets/discount.png" className="w-10 h-5" />
                  <img
                    src={inWish ? "/assets/like.svg" : "/assets/notlike.svg"}
                    className="w-6 h-6 cursor-pointer"
                    onClick={() =>
                      dispatch(inWish ? removeWish(item.id) : addWish(item))
                    }
                  />
                </div>

                <div className="max-w-sm mx-auto px-20">
                  <NavLink to={`/order/${item.id}`}>
                    <img
                      src={item.image}
                      className="w-[100px] h-[90px]"
                      alt={item.title}
                    />
                  </NavLink>
                </div>

                <div className="px-0 mt-3">
                  <div className="px-1 mt-4 text-sm">
                    <h3>{item.title.slice(0, 20)}</h3> <h2>₹ {item.price}/-</h2>
                  </div>
                </div>
                <div className="px-6">
                  <div
                    className={`px-12 w-full py-1 text-center mt-3 gap-1 flex items-center rounded-md ${inCart ? "bg-orange-600" : "bg-blue-600"
                      }`}
                   >
                    <img src="/assets/add.png" alt="" className="text-black w-6" />
                    <button
                      className={`text-[10px] w-5xl rounded-sm text-white `}
                      onClick={() =>
                        inCart ? gotoCart() : dispatch(addItem(item))
                      }
                    >
                      {inCart ? "Go to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {Show && paginatedProducts.length > 0 && (
          <Pagination
            page={page}
            setPage={setPage}
            numberOfPages={numberOfPages}
          />
        )}

        <ScrollToTop />
      </div>
    </>
  );
}

export default AllProduct;
