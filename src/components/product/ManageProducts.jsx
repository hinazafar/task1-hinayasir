import React, { useEffect, useRef, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import EditProductModal from "./EditProductModal";
import { useSelector } from "react-redux";

const ManageProducts = () => {
  const authtoken = useSelector((state) => state.user.currentUser.token);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMsg] = useState("");
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const handleOpenModal = (product) => {
    console.log("Edit Product", product);
    setEditProduct(product);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setEditProduct(null);
  };
  const handleSaveProduct = async (updatedProduct) => {
    console.log("Updated Product=", updatedProduct);
    try {
      const formData = new FormData();
      formData.append("id", updatedProduct.id);
      formData.append("name", updatedProduct.name);
      formData.append("price", updatedProduct.price);
      formData.append("quantity", updatedProduct.quantity);
      formData.append("description", updatedProduct.description);
      formData.append("picture", updatedProduct.picture);
      console.log("file in foem data", formData.get("picture"));
      const response = await fetch(
        "http://localhost:3000/api/product/update-product",
        {
          headers: {
            "auth-token": authtoken,
          },
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Product uploaded result=", result);
        setAlertMsg("Product Updated Successfully");
        setAlert(true);
      } else {
        console.error("Product upload failed", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading product", error);
    }
  };
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);
  const handleDelete = async (id) => {
    try {
      console.log("Id Clicked", id);
      const response = await fetch(
        "http://localhost:3000/api/product/deleteProduct",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: id,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setAlertMsg("Product Deleted Successfuly !");
        setAlert(true);
        console.log("Product deleted successfully", result.message);
      } else {
        console.error("Product delete failed", result.message);
      }
    } catch (error) {
      console.error("Error uploading product", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [alert]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/product/products"
      );
      const result = await response.json();
      console.log("Result of all products", result);
      setProducts(result[0]);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  return (
    <>
      {alert && (
        <div className="alert alert-primary w-50 mx-auto">{alertMessage}</div>
      )}
      <div className="container table-container">
        <h4 className="mx-2 mr-auto">Product List</h4>
        <table className="table  table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Picture</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product?.description.split(" ").slice(0, 6).join(" ")}</td>
                <td>
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
                        width: "50px",
                        height: "25px",
                      }}
                    />
                  )}
                </td>
                <td className="text-center">
                  <FaRegEdit
                    style={{ width: "17px", height: "17px", color: "green" }}
                    onClick={() => handleOpenModal(product)}
                  />
                  <RiDeleteBin6Line
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "red",
                      marginLeft: "10px",
                    }}
                    onClick={() => handleDelete(product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {editProduct && (
          <EditProductModal
            show={showModal}
            handleClose={handleCloseModal}
            product={editProduct}
            handleSave={handleSaveProduct}
          />
        )}
      </div>
    </>
  );
};

export default ManageProducts;
