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
import React, { ComponentType, Suspense } from 'react';
import { AdminRoute } from "@/components/Admin/AdminRoute";
import AdminDashboard from "@/pages/AdminDashboard";
const About=React.lazy(()=>import("../pages/About")) 
const withSuspense= (Component:ComponentType)=>(
  <Suspense>
    <Component/>
  </Suspense>
)
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
          { path: "category/:cat", element: withSuspense(CategoryProducts)  },
         
        ],
      },
       { path: "products/:id", element: <Details /> },

      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "services", element: withSuspense(Services) },
      { path: "test", element: <TestPage /> },
      { path: "buynow", element: withSuspense(BuyNow) },
      { path: "myblog", element: withSuspense(Blog) },
      { path: "homework", element: <Homework /> },
      { path: "homework", element: <Homework /> },
       { path: "about", element: withSuspense(About)
       },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "mycart", element: <MyCart /> }],
  },
  {
    path:"admin",
  element:
 ( <AdminRoute>
    <AdminDashboard />
  </AdminRoute>)
 }

]);

