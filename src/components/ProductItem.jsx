import { RiShoppingCartFill } from "react-icons/ri";
const ProductItem = ({ product }) => {
  return (
    <>
      <div className="card mt-1" style={{ width: "18rem" }}>
        {/* <img src="/images.png" className="card-img-top" alt="Product Picture" /> */}
        <RiShoppingCartFill className="mx-3" size="50px" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Details: {product.description}</p>
          <p className="card-text">Price: {product.price}$</p>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
