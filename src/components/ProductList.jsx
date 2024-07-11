import { useLoaderData } from "react-router-dom";
import PostItem from "./ProductItem";
const ProductList = () => {
  const productList = useLoaderData();
  //console.log("Product List", productList);
  return (
    <>
      <PostItem></PostItem>
      <PostItem></PostItem>
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
