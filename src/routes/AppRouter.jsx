import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BACKOFFICE_DASHBOARD,
  BACKOFFICE_LOGIN,
  BACKOFFICE_REGISTER,
  HOME_PAGE,
  WEBAPP_LOGIN,
  WEBAPP_REGISTER,
} from "../../src/constants/Routes";
import Dashboard from "../pages/Backoffice/Dashboard/Dashboard";
import RegisterBackOffice from "../pages/Backoffice/Register/Register";
import LoginBackoffice from "../pages/Backoffice/Login/Login";

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
          <Route path={HOME_PAGE} element={<h1>Web app home</h1>} />
          <Route path={WEBAPP_LOGIN} element={<h1>Web app login</h1>} />
          <Route path={WEBAPP_REGISTER} element={<h1>Web app register</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
