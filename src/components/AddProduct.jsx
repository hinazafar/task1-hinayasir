import { Form, redirect } from "react-router-dom";
const AddProduct = () => {
  return (
    <form method="POST" className="create-post container-div">
      <h4>Add Product</h4>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Product Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          name="userId"
          placeholder="Your user ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Product Price:
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <span className="input-group-text">0.00</span>
          <input
            type="number"
            className="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Product Description:
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="body"
          name="body"
          placeholder="Tell us more about it."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Upload Product Picture here:
        </label>
        <input className="form-control" type="file" id="formFile" />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};
export default AddProduct;
