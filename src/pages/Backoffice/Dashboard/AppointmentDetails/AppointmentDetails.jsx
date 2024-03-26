import { Form, Table, Modal, Image } from "antd";
import React, { useState, useEffect } from "react";
import { EditableCell } from "../../../../utils";
import { appointmentDetailsConfig } from "./appointmentDetailsConfig";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AppointmentDetails = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [editingKey, setEditingKey] = useState("");

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [lastName, setUsername] = useState("");
  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     console.log(cookies.token);
  //     if (!cookies.token) {
  //       navigate("/login");
  //     }
  //     const { data } = await axios.post(
  //       "http://localhost:4000/",
  //       {},
  //       { withCredentials: true }
  //     );
  //     const { status, user } = data;
  //     setUsername(user);
  //     return status
  //       ? toast(`Hello ${user}`, {
  //           position: "top-right",
  //         })
  //       : (removeCookie("token"), navigate("/login"));
  //   };
  //   verifyCookie();
  // }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  const [userDetailsData, setUserDetailsData] = useState([
    {
      key: "1",
      dataIndex: "1",
      sNo: "1",
      firstName: "Hania",
      phoneNumber: "03164247366",
      lastName: "Imtisal",
      email: "hania@gmail.com",
      appointmentTime: "09:00",
      appointmentDate: "06/02/2024",
      address: "NFC society,LHR",
      status: "in-process",
    },
  ]);
  const handlePreview = (record) => {
    Modal.info({
      title: "Image Preview",
      content: (
        <Image
          src={record.licenseeImage}
          alt="Licensee Image"
          id="LicenseeImage"
        />
      ),
      id: "PreviewModal",
    });
  };
  // This function saves the edited changes.
  const onSave = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...userDetailsData];
      const index = newData.findIndex((item) => key.key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setUserDetailsData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setUserDetailsData(newData);
        setEditingKey("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // This function cancels the editing mode.
  const onCancel = () => {
    setEditingKey("");
  };
  // Editing key is really important.

  // This function enables the editing mode for the selected record.
  const onEdit = (record) => {
    form.setFieldsValue({
      sNo: "",
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      age: "",
      address: "",
      status: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const onDelete = (key) => {
    const newData = userDetailsData.filter((item) => item.key !== key.key);
    setUserDetailsData(newData);
  };
  const columns = appointmentDetailsConfig(
    editingKey,
    onSave,
    onCancel,
    onEdit,
    onDelete,
    handlePreview
  );

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        inputType: col.inputType,
        inputProps: col.inputProps,
        editing: record.key === editingKey,
      }),
    };
  });

  return (
    <div>
      <Form form={form}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          dataSource={userDetailsData}
          columns={mergedColumns}
          rowClassName="editable-row"
          loading={isLoading}
          scroll={{
            x: 1000,
            y: 500,
          }}
        />
      </Form>
    </div>
  );
};

export default AppointmentDetails;
