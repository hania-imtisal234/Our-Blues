import React from "react";
import Sidebar from "../../../components/Dashboard/Sidebar/Sidebar";
import { Layout } from "antd";
import DashboardRouter from "../../../routes/DashboardRouter";
const { Content } = Layout;

const Dashboard = () => {
  return (
    <div className="bg-sea-salt" id="custom-dashboard">
      <Layout className="min-h-[100vh]">
        <Sidebar className="bg-yale-blue" />
        <Layout>
          <Content className="mx-0 my-2">
            <DashboardRouter />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
