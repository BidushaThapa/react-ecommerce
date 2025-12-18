import { createBrowserRouter } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { Services } from "../pages/Services";
import RootLayout from "../Layout/RootLayout";
import { Details } from "../pages/ProductDetails";
import { ProductListing } from "../pages/ProductListing";
import { MyCart } from "../pages/MyCart";
import { BuyNow } from "../pages/BuyNow";
import { Blog } from "../pages/Blog";
import { Home } from "../pages/Home";
import TestPage from "../pages/TestPage";
import { Homework } from "../pages/Homework";
import { Login } from "../pages/Login";
import { AuthLayout } from "../Layouts/AuthLayout";
import CategoryProducts from "../pages/CategoryProducts";
import ShopLayout from "@/components/ShopLayout";
import { About } from "@/pages/About";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "products",
        element: <ShopLayout />,
        children: [
          { index: true, element: <ProductListing /> },
          { path: "category/:cat", element: <CategoryProducts /> },
         
        ],
      },
       { path: "products/:id", element: <Details /> },

      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "services", element: <Services /> },
      { path: "test", element: <TestPage /> },
      { path: "buynow", element: <BuyNow /> },
      { path: "myblog", element: <Blog /> },
      { path: "homework", element: <Homework /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "mycart", element: <MyCart /> }],
  },
]);

