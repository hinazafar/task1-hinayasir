import { RiShoppingCartFill } from "react-icons/ri";
const ProductItem = ({ product }) => {
  return (
    <>
      <div className="card mx-2 my-2" style={{ width: "12.6rem" }}>
        <img
          src="/shirt.png"
          style={{ width: "200px", height: "200px" }}
          className="card-img-top"
          alt="Product Picture"
        />
        {/* <RiShoppingCartFill className="mx-3" size="50px" /> */}
        <div className="card-body">
          <h6 className="card-title">{product.name}</h6>
          <p className="card-text">Details: {product.description}</p>
          <p className="card-text">Price: {product.price}$</p>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
