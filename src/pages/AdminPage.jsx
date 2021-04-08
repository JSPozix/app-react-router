import React from "react";
import { Route, Redirect } from "react-router-dom";

import AdminPanel from "../Components/AdminPanel.jsx";

const permission = false;

const AdminPage = () => {
  return (
    <Route
      render={() => (permission ? <AdminPanel /> : <Redirect to="/login" />)}
    />
  );
};

export default AdminPage;
