import AllProduct from "../screens/AllProduct";


function Product({ searchTerm }) {
  return (
    <>
      <div style={{ position: "relative" }}>
        <AllProduct filter={searchTerm} Showloader={true} Show={true} />
      </div>
    </>
  );
}

export default Product;
