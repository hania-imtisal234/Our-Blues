import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  BACKOFFICE_DASHBOARD,
  BACKOFFICE_LOGIN,
  BACKOFFICE_REGISTER,
  HOME_PAGE,
  WEBAPP_LOGIN,
  WEBAPP_REGISTER,
  GROUPSELECTION,
  THERAPISTS,
  HEALTHBLOG,
  SELFCARE,
  THERAPISTDETAILS,
  DASHBOARD_ADMINSTATS,
  GROUP_CHAT,
} from "../../src/constants/Routes";
import Dashboard from "../pages/Backoffice/Dashboard/Dashboard";
import RegisterBackOffice from "../pages/Backoffice/Register/Register";
import LoginBackoffice from "../pages/Backoffice/Login/Login";
import Home from "../pages/WebApp/Home/Home";
import UserRegister from "../pages/WebApp/Register/Register";
import LoginUser from "../pages/WebApp/Login/Login";
import GroupSelection from "../pages/WebApp/GroupSelection/GroupSelection";
import Therapists from "../pages/WebApp/Therapists/Therapists";
import ViewHealthblog from "../pages/WebApp/ViewHealthblog/ViewHealthblog";
import TherapistDetails from "../pages/WebApp/TherapistDetails/TherapistDetails";
import SelfCare from "../pages/WebApp/SelfCare/SelfCare";
import AdminStats from "../pages/Backoffice/Dashboard/AdminStats/AdminStats";
import GroupChat from "../pages/WebApp/GroupChat/GroupChat";
import SupportGroup from "../pages/WebApp/SupportGroup/SupportGroup";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Backoffice Routes */}
          <Route path={BACKOFFICE_LOGIN} element={<LoginBackoffice />} />
          <Route path={BACKOFFICE_REGISTER} element={<RegisterBackOffice />} />
          <Route path={BACKOFFICE_DASHBOARD} element={<Dashboard />} />
          <Route path={DASHBOARD_ADMINSTATS} element={<AdminStats/>}/>

          {/* Webapp Routes */}
          <Route path={HOME_PAGE} element={<Home />} />
          <Route path={"/"} element={<Navigate to={HOME_PAGE} />} />
          <Route path={WEBAPP_LOGIN} element={<LoginUser />} />
          <Route path={WEBAPP_REGISTER} element={<UserRegister />} />
          <Route path={GROUPSELECTION} element={<GroupChat />} />
          <Route path={THERAPISTS} element={<Therapists />} />
          <Route path={HEALTHBLOG} element={<ViewHealthblog />} />
          <Route path={THERAPISTDETAILS} element={<TherapistDetails />} />
          <Route path={SELFCARE} element={<SelfCare />}/>
          <Route path="/group/:groupName" element={<SupportGroup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
