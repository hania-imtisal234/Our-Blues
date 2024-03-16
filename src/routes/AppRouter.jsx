import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  BACKOFFICE_DASHBOARD,
  BACKOFFICE_LOGIN,
  BACKOFFICE_REGISTER,
  HOME_PAGE,
  WEBAPP_LOGIN,
  WEBAPP_REGISTER,
  SUPPORTGROUP,
  THERAPISTS,
  HEALTHBLOG,
  THERAPISTDETAILS,
} from "../../src/constants/Routes";
import Dashboard from "../pages/Backoffice/Dashboard/Dashboard";
import RegisterBackOffice from "../pages/Backoffice/Register/Register";
import LoginBackoffice from "../pages/Backoffice/Login/Login";
import Home from "../pages/WebApp/Home/Home";
import UserRegister from "../pages/WebApp/Register/Register";
import LoginUser from "../pages/WebApp/Login/Login";
import SupportGroup from "../pages/WebApp/SupportGroup/SupportGroup";
import Therapists from "../pages/WebApp/Therapists/Therapists";
import ViewHealthblog from "../pages/WebApp/ViewHealthblog/ViewHealthblog";
import TherapistDetails from "../pages/WebApp/TherapistDetails/TherapistDetails";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Backoffice Routes */}
          <Route path={BACKOFFICE_LOGIN} element={<LoginBackoffice />} />
          <Route path={BACKOFFICE_REGISTER} element={<RegisterBackOffice />} />
          <Route path={BACKOFFICE_DASHBOARD} element={<Dashboard />} />

          {/* Webapp Routes */}
          <Route path={HOME_PAGE} element={<Home />} />
          <Route path={"/"} element={<Navigate to={HOME_PAGE} />} />
          <Route path={WEBAPP_LOGIN} element={<LoginUser />} />
          <Route path={WEBAPP_REGISTER} element={<UserRegister />} />
          <Route path={SUPPORTGROUP} element={<SupportGroup />} />
          <Route path={THERAPISTS} element={<Therapists />} />
          <Route path={HEALTHBLOG} element={<ViewHealthblog />} />
          <Route path={THERAPISTDETAILS} element={<TherapistDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
