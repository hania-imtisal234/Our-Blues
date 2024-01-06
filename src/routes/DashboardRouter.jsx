import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import UserDetails from "../pages/Backoffice/Dashboard/UserDetails/UserDetails";
import TherapistDetails from "../pages/Backoffice/Dashboard/TherapistDetails/TherapistDetails.jsx";
import AppointmentDetails from "../pages/Backoffice/Dashboard/AppointmentDetails/AppointmentDetails.jsx";
import {
  DASHBOARD_APPOINTMENTS,
  DASHBOARD_CHANGEPASSWORD,
  DASHBOARD_CHANGEPROFILE,
  DASHBOARD_EDITPROFILE,
  DASHBOARD_SET_FEE_TIME,
  DASHBOARD_THERAPISTSINFO,
  DASHBOARD_USERSINFO,
} from "../constants/Routes.js";
import EditProfile from "../components/Shared/EditProfile/EditProfile.jsx";
import ChangePassword from "../components/Shared/ChangePassword/ChangePassword.jsx";
import SetTimeFee from "../pages/Backoffice/Dashboard/SetTimeFee/SetTimeFee.jsx";

const DashboardRouter = () => {
  return (
    <div>
      <Routes>
        {/* Admin Routes */}
        <Route path={DASHBOARD_USERSINFO} element={<UserDetails />} />
        <Route path={DASHBOARD_THERAPISTSINFO} element={<TherapistDetails />} />
        {/* Therapist Routes */}
        <Route path={DASHBOARD_APPOINTMENTS} element={<AppointmentDetails />} />
        <Route path={DASHBOARD_EDITPROFILE} element={<EditProfile />} />
        <Route path={DASHBOARD_CHANGEPASSWORD} element={<ChangePassword />} />
        <Route path={DASHBOARD_SET_FEE_TIME} element={<SetTimeFee />} />
      </Routes>
    </div>
  );
};

export default DashboardRouter;
