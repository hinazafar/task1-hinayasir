import { Form, redirect } from "react-router-dom";
const AddProduct = () => {
  return (
    <Form method="POST" className="create-post container-div">
      <h4>Add Product</h4>
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">
          Product Name:
        </label>
        <input
          type="text"
          className="form-control"
          name="productName"
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
            name="productPrice"
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
          name="productDescription"
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
          name="productPicture"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
      
    </Form>
  );
};
export async function createProductAction(data) {
  const formData = await data.request.formData();
  const productData = Object.fromEntries(formData);
  console.log(productData);

  // fetch("http://dummyjson.com/posts/add", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(productData),
  // })
  //   .then((res) => res.json())
  //   .then((product) => console.log(product));

  return redirect("/");
}
export default AddProduct;
