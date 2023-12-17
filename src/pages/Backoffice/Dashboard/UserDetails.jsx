import React from "react";
import CustomButton from "../../../components/Shared/CustomButton/CustomButton";
import { Table } from "antd";

const UserDetails = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "12%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "25%",
    },
    {
      title: "PhoneNumber",
      key: "phoneNumber",
      dataIndex: "phoneNumber",
      width: "15%",
    },
    {
      title: "Location",
      key: "location",
      dataIndex: "location",
      width: "15%",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const { key, name, email, phoneNumber, location } = record;
        const userData = {
          key,
          name,
          email,
          phoneNumber,
          location,
        };
        return (
          <div className="flex items-center justify-end gap-8">
            <CustomButton
              buttonLabel="Edit"
              className="bg-yale-blue text-white"
            />
            <CustomButton
              buttonLabel="Delete"
              className="bg-yale-blue text-white"
            />
          </div>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "Hania",
      email: "hania.imtisal234@gmail.com",
      phoneNumber: "0316-4247366",
      location: "H#740 d block street 4 NFC society",
    },
  ];

  return (
    <div className=" bg-white py-5">
      <div className="flex items-start ml-5">
        <h1 className="text-yale-blue font-bold text-2xl">User Details</h1>
      </div>
      <div className="flex items-center justify-between mb-5"></div>
      <Table
        className="border-t border-creme"
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1000,
          y: 500,
        }}
      />
    </div>
  );
};

export default UserDetails;
