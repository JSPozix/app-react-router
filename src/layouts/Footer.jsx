import React from "react";
import { Route } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
      <Route
        path="/"
        exact
        render={(props) => {
          return <p>Jestes na stronie głownej</p>;
        }}
      />
      <Route
        path="/:page"
        exact
        render={(props) => {
          return (
            <>
              <p>Jestes na stronie {props.match.params.page}</p>
              <p>Jestes na stronie {props.match.url}</p>
              <p>Jestes na stronie {props.match.path}</p>
            </>
          );
        }}
      />
      <Route
        path="/:page/:idProduct"
        exact
        render={(props) => {
          console.log(props);

          return (
            <>
              <p>Jestes na stronie {props.match.params.idProduct}</p>
              <p>Jestes na stronie {props.match.url}</p>
              <p>Jestes na stronie {props.match.path}</p>
            </>
          );
        }}
      />
    </div>
  );
};

export default Footer;
