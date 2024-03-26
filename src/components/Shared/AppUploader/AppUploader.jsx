import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import axios from "axios";

const { Dragger } = Upload;

const AppUploader = ({ name, label, getTherapistEmail }) => {
  const handleUpload = async (file) => {
    try {
      console.log(file);
      const therapistEmail = getTherapistEmail();
      console.log(therapistEmail);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("email", therapistEmail);
      console.log(therapistEmail);
      const response = await axios.post(
        "http://localhost:4000/upload",
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      message.success("Image uploaded successfully.");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        message.error("Image already uploaded");
      } else {
        message.error("Failed to upload image.");
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
