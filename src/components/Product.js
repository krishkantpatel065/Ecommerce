import AllProduct from "../screens/AllProduct";


function Product({ searchTerm }) {
  return (
    <>
      <div style={{ position: "relative" }}>
        <AllProduct filter={searchTerm} Showloader={true} isShow={true} />
      </div>
    </>
  );
}

export default Product;
