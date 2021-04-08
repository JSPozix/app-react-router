import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const list = [
  { id: 0, name: "start", path: "/", exact: true },
  { id: 1, name: "produkty", path: "products" },
  { id: 2, name: "Kontakt", path: "contact" },
  { id: 3, name: "admin", path: "admin" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.id}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
