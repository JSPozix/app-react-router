import React from "react";
import { Route, Switch } from "react-router-dom";
import img1 from "../Images/header1.jpg";
import img2 from "../Images/header2.jpg";
import img3 from "../Images/header3.jpg";
import "../styles/header.css";

const gallery = [
  { path: "/", src: img1, alt: "miasto1" },
  { path: "/products", src: img2, alt: "miasto2" },
  { path: "/contact", src: img3, alt: "miasto3" },
  { src: img1, alt: "miastoError" },
];

const Headers = () => {
  const Gallery = gallery.map((item) => (
    <Route
      key={item.alt}
      path={item.path}
      exact
      render={() => <img src={item.src} alt="item.alt" />}
    />
  ));

  return (
    <Route>
      <Switch>
        {/* <Route path="/" render={() => <img src={img1} alt="miasto" />} /> */}
        {Gallery}
      </Switch>
    </Route>
  );
};

export default Headers;
