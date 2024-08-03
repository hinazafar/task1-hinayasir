import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  // Split the string by spaces to get an array of words
  const words = product?.description.split(" ");
  const first10Words = words.slice(0, 6);
  const description = first10Words.join(" ");
  const words2 = product?.name.split(" ");
  const first3Words = words2.slice(0, 3);
  const title = first3Words.join(" ");
  return (
    <>
      <div className="card mx-2 my-2" style={{ width: "12.6rem" }}>
        {/* converting bit array of image into an image file */}
        {product.pictureName && (
          <img
            src={`http://localhost:3000/uploads/${product.pictureName}`}
            alt={product.name}
            style={{
              width: "150px",
              height: "100px",
              margin: "10px 5px 0px 20px",
            }}
          />
        )}
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">
            {description} <a href="#">more...</a>
          </p>
          <p className="card-text">Price: {product.price}$</p>
          <div className="d-grid">
            <button type="button" className="btn btn-outline-info btn-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
