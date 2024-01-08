import React, { useState, useEffect } from "react";
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader";
import { Layout } from "antd";
import { useParams } from "react-router-dom";
import AppFooter from "../../../components/Shared/AppFooter/AppFooter";
import { Therapists } from "../../../enums";
import TherapistCard from "../../../components/WebApp/TherapistCard/TherapistCard";
import ViewRatings from "../../../components/WebApp/ViewRatings/ViewRatings";
import AppointmentCard from "../../../components/WebApp/AppointmentCard/AppointmentCard";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const TherapistDetails = () => {
  const params = useParams();
  const selectedTherapist = params.therapistName.replace(/(\d)$/, " $1");
  console.log(selectedTherapist);
  const therapistInfo = Therapists.find(
    (therapist) => therapist.name == selectedTherapist
  );
  console.log(therapistInfo);

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
    <Layout className="mainLayout bg-sea-salt h-full">
      <WebHeader />
      <div className="grid grid-cols-2 ">
        <div className="cols-span-1">
          <div className="flex justify-center item-center">
            <div className="flex-cols justify-center items-center ">
              <div className="my-10">
                <TherapistCard therapistInfo={therapistInfo} />
              </div>
              <div className="my-10">
                <ViewRatings
                  therapistInfo={therapistInfo}
                  selectedTherapist={selectedTherapist}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cols-span-1 ">
          <AppointmentCard therapistInfo={therapistInfo} />
        </div>
      </div>
      <Layout>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default TherapistDetails;
