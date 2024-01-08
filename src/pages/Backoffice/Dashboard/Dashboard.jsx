import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../../../components/Backoffice/Dashboard/Sidebar/Sidebar";
import AppHeader from "../../../components/Shared/AppHeader/AppHeader";
import {
  adminMenuItems,
  therapistMenuItems,
} from "../../../constants/index.js";
import { Layout } from "antd";
import DashboardRouter from "../../../routes/DashboardRouter";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const Dashboard = () => {
  const userRole = "admin";
  const menuItems = userRole === "admin" ? adminMenuItems : therapistMenuItems;

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [lastName, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      console.log(cookies.token);
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000/",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
    <div className="bg-sea-salt" id="custom-dashboard">
      <Layout className="min-h-[100vh]">
        <Sidebar
          className="bg-yale-blue sticky top-0 z-10"
          menuItems={menuItems}
        />
        <Layout>
          <AppHeader />
          <Content className="mx-4 my-2 ">
            <DashboardRouter />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
