import React, { useEffect, useState } from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { Dragger } = Upload;

const AppUploader = ({ name, label }) => {
  const [currentTherapist, setCurrentTherapist] = useState(""); // Moved useState inside the component body

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      const { email } = JSON.parse(storedUser);
      setCurrentTherapist(email);
    }
  }, []);

  const handleUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("email", currentTherapist);
      const UploadedImage = await axios.post(
        "http://localhost:4000/upload",
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const { success, message } = UploadedImage.data;
      if (!success) {
        throw new Error(`Error with booking appointment: ${message}`);
      }

      toast.success("Image uploaded successfully.");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Image Already Uploaded");
      } else {
        toast.error("Failed to upload image.");
      }
    }
  };

  return (
    <Dragger
      name={name}
      multiple={true}
      beforeUpload={handleUpload}
      showUploadList={false}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">{label}</p>
    </Dragger>
  );
};

export default AppUploader;
