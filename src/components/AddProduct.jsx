import { useRef } from "react";
import { useSelector } from "react-redux";
import { Form, redirect } from "react-router-dom";
const AddProduct = () => {
  const currentUser = useSelector((state) => state.user);
  const name = useRef();
  const price = useRef();
  const description = useRef();
  const picture = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {}
  };
  return (
    <form
      method="POST"
      className="create-post container-div"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h4>Add Product</h4>
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">
          Product Name:
        </label>
        <input
          type="text"
          className="form-control"
          ref={name}
          required
          placeholder="Product Name..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Product Price:
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <span className="input-group-text">0.00</span>
          <input
            type="number"
            className="form-control"
            ref={price}
            required
            aria-label="Dollar amount (with dot and two decimal places)"
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="productDescription" className="form-label">
          Product Description:
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="productDescription"
          ref={description}
          placeholder="Tell us more about it."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Upload Product Picture here:
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          ref={picture}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};
export default AddProduct;