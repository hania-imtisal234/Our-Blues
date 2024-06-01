import React, { useState, useEffect } from "react";
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader";
import { Layout } from "antd";
import AppFooter from "../../../components/Shared/AppFooter/AppFooter";
import BasicCard from "../../../components/Shared/BasicCard/BasicCard";
import Loader from "../../../components/Shared/Loader/Loader";
import { Input } from "antd";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LocaleProvider from "antd/es/locale";

const { Search } = Input;

const Therapists = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [therapists, setTherapists] = useState([]);

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  useEffect(() => {
    const fetchTherapists = async (values) => {
      try {
        setIsLoading(true);

        const { data } = await axios.get(
          "http://localhost:4000/getTherapists",
          {
            ...values,
          },
          { withCredentials: true }
        );

        setTherapists(data);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw new Error(error);
      }
    };

    fetchTherapists();
  }, []);

  return (
    <Layout className="mainLayout bg-sea-salt ">
      <WebHeader />
      <div className="flex justify-center  bg-sea-salt ">
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
            {isLoading ? (
              <div>
                <Loader />
              </div>
            ) : (
              therapists.map((therapist, index) => (
                <BasicCard
                  key={index}
                  name={`Dr. ${therapist.firstName} ${therapist.lastName}`}
                  id={therapist._id}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <Layout style={{ marginTop: "10vh" }}>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default Therapists;
