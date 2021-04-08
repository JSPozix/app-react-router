import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css";
const products = [
  { id: 0, name: "car" },
  { id: 1, name: "bike" },
  { id: 2, name: "motorcycle" },
];

const ProductListPage = () => {
  const list = products.map((prod) => (
    <li key={prod.id}>
      <Link to={`/product/${prod.name}`}>{prod.name} </Link>
    </li>
  ));

  return (
    <div className="products">
      <h2>Lista produktów</h2>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductListPage;
