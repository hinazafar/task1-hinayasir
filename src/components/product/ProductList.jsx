import React, { useState, useEffect } from "react";
import { changeTab } from "../../store/tabSlice";
import ProductItem from "./ProductItem";
import { useDispatch } from "react-redux";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  dispatch(changeTab("home"));
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/product/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Internal Server Error");
        }
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setProducts(data);
        //console.log(products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loader mx-5 my-5"></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="d-flex flex-row justify-content-center flex-wrap p-2">
        <div className="d-flex flex-row justify-content-center w-100 mt-3 ">
          <h4>Product List</h4>
        </div>
        {/*if you use procedures then pass product as products[0], for simple sql pass products*/}
        {products[0].map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
