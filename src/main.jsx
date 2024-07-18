import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import AddProduct from "./components/AddProduct.jsx";
import "./index.css";
import ProductList from "./components/ProductList.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./store/index.js";
import { PersistGate } from "redux-persist/integration/react";
import UserProfile from "./components/UserProfile.jsx";
import OTPSignUp from "./components/OTPSignUp.jsx";
import OTPForgotPass from "./components/OTPForgotPass.jsx";
import SetNewPassword from "./components/SetNewPassword.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/add-product",
            element: <AddProduct />,
          },
          { path: "/profile", element: <UserProfile /> },
        ],
      },
      { path: "/", element: <ProductList /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/otp-signup", element: <OTPSignUp /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/otp-forgot-password", element: <OTPForgotPass /> },
      { path: "/set-password", element: <SetNewPassword /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
