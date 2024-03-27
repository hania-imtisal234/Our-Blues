import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "antd";
import Chart from "chart.js/auto";

const AdminStats = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getUsers");
        console.log("Fetched data:", response.data.getUsers);
        setUserData(response.data.getUsers);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const countUsersByRole = (role) => {
    return userData.filter((user) => user.role === role).length;
  };

  const countTherapistsByStatus = () => {
    return countUsersByRole("therapist");
  };

  const getMonthFromDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", { month: "long" });
  };

  const monthWiseUserStats = () => {
    const months = {};
    userData.forEach((user) => {
      const month = getMonthFromDate(user.createdAt);
      if (months[month]) {
        months[month]++;
      } else {
        months[month] = 1;
      }
    });
    return months;
  };

  useEffect(() => {
    const existingUserChart = new Chart(
      document.getElementById("existingUserChart"),
      {
        type: "pie",
        data: {
          labels: ["Users", "Therapists"],
          datasets: [
            {
              data: [countUsersByRole("user"), countTherapistsByStatus()],
              backgroundColor: ["#FF6384", "#36A2EB"],
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Existing User Stats",
              color: "#0F4C81",
              font: {
                size: 20,
                weight: "bold",
              },
            },
          },
        },
      }
    );

    const monthWiseUserChart = new Chart(
      document.getElementById("monthWiseUserChart"),
      {
        type: "bar",
        data: {
          labels: Object.keys(monthWiseUserStats()),
          datasets: [
            {
              label: "Number of Users",
              data: Object.values(monthWiseUserStats()),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Month-wise User Stats",
              color: "#0F4C81",
              font: {
                size: 20,
                weight: "bold",
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      }
    );

    return () => {
      existingUserChart.destroy();
      monthWiseUserChart.destroy();
    };
  }, [userData]);

  return (
    <Layout>
      <Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <div style={{ width: "30%" }}>
            <canvas id="existingUserChart"></canvas>
          </div>
          <div style={{ width: "40%" }}>
            <canvas id="monthWiseUserChart"></canvas>
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

export default AdminStats;
