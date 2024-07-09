
const ProductItem = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="react.svg" className="card-img-top" alt="Product Picture" />
        <div className="card-body">
          <h5 className="card-title">NIKE Shirt</h5>
          <p className="card-text">
            This shirt is for boys only. THe fabric quality is amazng.
          </p>
          <p className="card-text">Price: 100$</p>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
