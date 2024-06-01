import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { THERAPISTDETAILS } from "../../../constants/Routes";

const BasicCard = ({ name, id }) => {
  const navigate = useNavigate();
  console.log("id of", id);
  return (
    <div
      className="bg-yale-blue w-40 h-40 rounded-lg cursor-pointer"
      onClick={() => {
        navigate(THERAPISTDETAILS.replace(":id", id));
      }}
    >
      <div className="flex justify-center p-4">
        <Avatar size={60} icon={<UserOutlined />} className="cursor-pointer " />
      </div>
      <div className="flex justify-center px-4 ">
        <div className=" w-40 h-12 px-2 bg-white rounded-md text-center sticky top-0 ">
          <h5 className="text-yale-blue pt-1 text-center text-large ">
            {name}
          </h5>
        </div>
      </div>
    </div>
  );
};
export default BasicCard;
