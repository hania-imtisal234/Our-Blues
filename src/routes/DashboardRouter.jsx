import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import UserDetails from "../pages/Backoffice/Dashboard/UserDetails/UserDetails";
import TherapistDetails from "../pages/Backoffice/Dashboard/TherapistDetails/TherapistDetails.jsx";
import {
  DASHBOARD_THERAPISTSINFO,
  DASHBOARD_USERSINFO,
} from "../constants/Routes.js";

const DashboardRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={DASHBOARD_USERSINFO} element={<UserDetails />} />
        <Route path={DASHBOARD_THERAPISTSINFO} element={<TherapistDetails />} />
        <Route path="/third" element={<h1>third</h1>} />
      </Routes>
    </div>
  );
};

export default DashboardRouter;
