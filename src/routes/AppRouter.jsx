import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BACKOFFICE_LOGIN,
  BACKOFFICE_REGISTER,
  HOME_PAGE,
  WEBAPP_LOGIN,
  WEBAPP_REGISTER,
} from "../../src/constants/Routes";
import LoginBackOffice from "../pages/Backoffice/Login/Login.jsx";
import RegisterBackOffice from "../pages/Backoffice/Register/Register";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Backoffice Routes */}
          <Route path={BACKOFFICE_LOGIN} element={<LoginBackOffice />} />
          <Route path={BACKOFFICE_REGISTER} element={<RegisterBackOffice />} />

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
