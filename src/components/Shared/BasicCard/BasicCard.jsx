import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const BasicCard = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-yale-blue w-40 h-40 rounded-lg cursor-pointer"
      onClick={() => {
        navigate(name);
      }}
    >
      <div className="flex justify-center p-4">
        <Avatar size={60} icon={<UserOutlined />} className="cursor-pointer " />
      </div>
      <div className="flex justify-center px-4 ">
        <div className=" w-40 h-8 px-2 bg-white rounded-md text-center sticky top-0">
          <h5 className="text-yale-blue p-2 text-center text-xs ">{name}</h5>
        </div>
      </div>
    </div>
  );
};
export default BasicCard;
