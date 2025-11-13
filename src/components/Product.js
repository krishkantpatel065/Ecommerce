import AllProduct from "../screens/AllProduct";
import Spinner from "./Spinner";

function Product() {
  return (
    <div style={{position:"relative"}}>
      <AllProduct isShow={true} />
    </div>
  );
}

export default Product;
