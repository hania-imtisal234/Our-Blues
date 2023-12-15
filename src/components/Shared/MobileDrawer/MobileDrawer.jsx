import { Drawer } from "antd";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigate } from "react-router";
import {
  BACKOFFICE_LOGIN,
  BACKOFFICE_REGISTER,
} from "../../../constants/Routes";

const MobileDrawer = ({ onClose, isDrawerOpen }) => {
  const navigate = useNavigate();

  return (
    <Drawer
      title="Our Blues"
      placement="right"
      onClose={onClose}
      open={isDrawerOpen}
      width={200}
    >
      <div className="w-auto flex flex-col gap-2 xs:gap-1">
        <CustomButton
          buttonLabel="Login"
          className="bg-yale-blue text-white"
          size="middle"
          onClick={() => {
            navigate(BACKOFFICE_LOGIN);
            onClose();
          }}
        />
        <CustomButton
          buttonLabel="Register"
          className="bg-yale-blue text-white"
          size="middle"
          onClick={() => {
            navigate(BACKOFFICE_REGISTER);
            onClose();
          }}
        />
      </div>
    </Drawer>
  );
};

export default MobileDrawer;
