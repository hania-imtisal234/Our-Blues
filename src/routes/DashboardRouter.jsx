import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import UserDetails from "../pages/Backoffice/Dashboard/UserDetails";

const DashboardRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/users" element={<UserDetails />} />
        <Route path="/second" element={<h1>second</h1>} />
        <Route path="/third" element={<h1>third</h1>} />
      </Routes>
    </div>
  );
};

export default DashboardRouter;
