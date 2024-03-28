import { Form, Table, Modal, Image } from "antd";
import React, { useState, useEffect } from "react";
import { EditableCell } from "../../../../utils";
import { userDetailsConfig } from "./userDetailsConfig";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UserDetails = () => {
  // Ant Design's Form Hook
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [editingKey, setEditingKey] = useState("");

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [lastName, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleError = (err) =>
toast.error(err, {
  position: "bottom-left",
});
const handleSuccess = (msg) =>
toast.success(msg, {
  position: "bottom-left",
});


  const handleEditProfile = async (values) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "http://localhost:4000/updateUserDetails",
        {
          ...values,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
      } else {
        handleError(message);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error(error);
    }
  };

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getUsers");
        const filteredUsers = response.data.getUsers.filter(
          (user) => user.role === "user"
        );
        setUserDetailsData(filteredUsers.map((user, index) => ({
          ...user,
          key: index.toString(), 
          id: index + 1, 
        })));
      } catch (error) {
        console.error(error);
        navigate("/login"); 
      }
    };
  
    fetchUsers();
  }, [navigate]);
  
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
  
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  const [userDetailsData, setUserDetailsData] = useState([]);

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
        console.log(newData[index])
        setUserDetailsData(newData);
        handleEditProfile(newData[index])
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

  const onCancel = () => {
    setEditingKey("");
  };

  const onEdit = (record) => {
    form.setFieldsValue({
      sNo: "",
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      age: "",
      location: "",
      ...record,
    });
    setEditingKey(record.key); 
  };
  

  const onDelete = (key) => {
    const newData = userDetailsData.filter((item) => item.key !== key.key);
    setUserDetailsData(newData);
  };

  const columns = userDetailsConfig(
    editingKey,
    onSave,
    onCancel,
    onEdit,
    onDelete,
    handlePreview,
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

export default UserDetails;
