import { useLoaderData } from "react-router-dom";
import PostItem from "./ProductItem";
const ProductList = () => {
  const productList = useLoaderData();
  console.log("Product List", productList);
  return (
    <>
      <PostItem></PostItem>
      <PostItem></PostItem>
    </>
  );
};
export const productLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default ProductList;
