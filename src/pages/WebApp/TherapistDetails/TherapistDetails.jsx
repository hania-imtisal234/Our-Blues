import React, { useEffect, useState } from "react";
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader";
import { Layout } from "antd";
import { useParams } from "react-router-dom";
import AppFooter from "../../../components/Shared/AppFooter/AppFooter";
import TherapistCard from "../../../components/WebApp/TherapistCard/TherapistCard";
import ViewRatings from "../../../components/WebApp/ViewRatings/ViewRatings";
import AppointmentCard from "../../../components/WebApp/AppointmentCard/AppointmentCard";
import Loader from "../../../components/Shared/Loader/Loader";
import axios from "axios";

const TherapistDetails = () => {
  const { id } = useParams();
  const selectedTherapistId = id;
  const [therapistInfo, setTherapistInfo] = useState(null); // Initial state as null to check for data
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTherapistData = async () => {
      try {
        console.log("Fetching data for Therapist ID:", selectedTherapistId);
        const { data } = await axios.get(
          `http://localhost:4000/getTherapistById/${selectedTherapistId}`,
          {
            withCredentials: true,
          }
        );
        console.log("Fetched data:", data);
        setTherapistInfo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTherapistData();
  }, [selectedTherapistId]);

  useEffect(() => {
    console.log("Therapist info state updated:", therapistInfo);
  }, [therapistInfo]);

  if (isLoading) {
    console.log("Loading state: true");
    return <Loader />;
  }

  if (!therapistInfo) {
    console.log("Therapist info is null");
    return <Loader />;
  }

  console.log("Therapist info is set and not null:", therapistInfo);

  return (
    <Layout className="mainLayout bg-sea-salt ">
      <WebHeader />
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="flex justify-center items-center">
            <div className="flex flex-col">
              <div className="my-10">
                <TherapistCard therapistInfo={therapistInfo} />
              </div>
              <div className="">
                <ViewRatings
                  therapistInfo={therapistInfo}
                  selectedTherapist={id}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <AppointmentCard therapistInfo={therapistInfo} />
        </div>
      </div>
      <Layout style={{ marginTop: "10vh" }}>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default TherapistDetails;
