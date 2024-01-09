import React, { useState, useEffect } from "react";
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader";
import { Layout } from "antd";
import AppFooter from "../../../components/Shared/AppFooter/AppFooter";
import BasicCard from "../../../components/Shared/BasicCard/BasicCard";
import { Input, Space } from "antd";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

const Therapists = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <Layout className="mainLayout bg-sea-salt h-screen">
      <WebHeader />
      <div className="flex justify-center  bg-sea-salt h-screen">
        <div className="w-[2/3] h-[2/3] p-10">
          <div className="flex justify-center">
            <Search
              placeholder="Search Therapist"
              className="w-20"
              allowClear
              onSearch={onSearch}
              style={{
                width: 250,
              }}
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-3 justify-center mt-10 p-4 mx-10 ">
            <BasicCard name={"Therapist1"} />
            <BasicCard name={"Therapist2"} />
            <BasicCard name={"Therapist3"} />
            <BasicCard name={"Therapist4"} />
          </div>
        </div>
      </div>
      <Layout>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default Therapists;
