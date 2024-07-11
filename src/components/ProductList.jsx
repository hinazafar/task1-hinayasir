import { useLoaderData } from "react-router-dom";
import ProductItem from "./ProductItem";
const ProductList = () => {
  const productList = useLoaderData();
  //console.log("Product List", productList);
  return (
    <>
      <div className="mx-5 my-5">
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </div>
    </>
  );
};
export const productLoader = () => {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      return data.products;
    });
};

export default ProductList;
