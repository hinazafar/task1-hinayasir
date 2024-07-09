import { Form, redirect } from "react-router-dom";
const AddProduct = () => {
  return (
    <form method="POST" className="create-post">
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
        <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <span class="input-group-text">0.00</span>
          <input
            type="number"
            class="form-control"
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
      <div class="mb-3">
        <label for="formFile" class="form-label">
          Upload Product Picture here:
        </label>
        <input class="form-control" type="file" id="formFile" />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default AddProduct;
