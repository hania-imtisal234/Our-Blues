import React from "react";
import Sidebar from "../../../components/Backoffice/Dashboard/Sidebar/Sidebar";
import AppHeader from "../../../components/Shared/AppHeader/AppHeader";
import {
  adminMenuItems,
  therapistMenuItems,
} from "../../../constants/index.js";
import { Layout } from "antd";
import DashboardRouter from "../../../routes/DashboardRouter";
const { Content } = Layout;
const Dashboard = () => {
  const userRole = "therapist";
  const menuItems = userRole === "admin" ? adminMenuItems : therapistMenuItems;
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
