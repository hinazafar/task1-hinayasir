import React, { useState } from "react";

const EditProductModal = ({ show, handleClose, product, handleSave }) => {
  console.log("picture bits", product.picture);

  const [productName, setProductName] = useState(product.name);
  const [productPrice, setProductPrice] = useState(product.price);
  const [productQuantity, setProductQuantity] = useState(product.quantity);
  const [productDescription, setProductDescription] = useState(
    product.description
  );
  const [productImage, setProductImage] = useState(product.picture);

  const onImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  const onSave = () => {
    const updatedProduct = {
      id: product.id,
      name: productName,
      price: productPrice,
      quantity: productQuantity,
      description: productDescription,
      picture: productImage,
    };

    handleSave(updatedProduct);
    handleClose();
  };

  return (
    <div
      className={`modal ${show ? "d-block" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Product</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="productPrice">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="productPrice"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="productQuantity">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="productQuantity"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="productDescription">Description</label>
                <textarea
                  className="form-control"
                  id="productDescription"
                  rows="3"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="productImage">Product Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="productImage"
                  onChange={onImageChange}
                />
              </div>
            </form>
          </div>

          {productImage && (
            <img
              src={`data:image/jpeg;base64,${btoa(
                new Uint8Array(productImage.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              )}
               `}
              alt={product.name}
              style={{
                width: "50px",
                height: "25px",
              }}
            />
          )}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={onSave}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
