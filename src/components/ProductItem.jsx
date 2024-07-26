import { RiShoppingCartFill } from "react-icons/ri";
const ProductItem = ({ product }) => {
  // Split the string by spaces to get an array of words
  console.log("product description", product[0]);
  //console.log("product description", product.description);
  const words = product?.description.split(" ");
  const first10Words = words.slice(0, 10);
  const description = first10Words.join(" ");
  const words2 = product?.name.split(" ");
  const first3Words = words2.slice(0, 3);
  const title = first3Words.join(" ");
  return (
    <>
      <div className="card mx-2 my-2" style={{ width: "12.6rem" }}>
        {/* <img
          src="/shirt.png"
          style={{ width: "200px", height: "200px" }}
          className="card-img-top"
          alt="Product Picture"
        /> */}
        {product.picture && (
          <img
            src={`data:image/jpeg;base64,${btoa(
              new Uint8Array(product.picture.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            )}`}
            alt={product.name}
            style={{
              width: "150px",
              height: "100px",
              margin: "10px 5px 0px 20px",
            }}
          />
        )}
        {/* <RiShoppingCartFill className="mx-3" size="50px" /> */}
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">
            {description} <a href="#">more...</a>
          </p>
          <p className="card-text">Price: {product.price}$</p>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
