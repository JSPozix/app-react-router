import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import ProductListPage from "../pages/ProductListPage.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Login from "../pages/Login.jsx";
const SitePaths = [
  { id: 0, path: "/", component: HomePage },
  { id: 1, path: "/contact", component: ContactPage },
  { id: 2, path: "/product/:id", component: ProductPage },
  { id: 3, path: "/products", component: ProductListPage },
  { id: 4, path: "/admin", component: AdminPage },
  { id: 5, path: "/login", component: Login },
  { id: 6, component: ErrorPage },
];
const Pages = () => {
  const Paths = SitePaths.map((item) => (
    <Route
      key={item.id}
      path={item.path}
      exact
      component={item.component}
    ></Route>
  ));

  return (
    <>
      <Switch>{Paths}</Switch>
    </>
  );
};

export default Pages;
