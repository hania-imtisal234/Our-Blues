import { Form, Table } from "antd";
import React, { useState } from "react";
import { EditableCell } from "../../../../utils";
import { userDetailsConfig } from "./userDetailsConfig";

const userDetails = () => {
  // Ant Design's Form Hook
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [editingKey, setEditingKey] = useState("");
  const [userDetailsData, setUserDetailsData] = useState([
    {
      key: "1",
      dataIndex: "1",
      sNo: "1",
      firstName: "Hania",
      lastName: "Imtisal",
      email: "hani@korean.com",
      gender: "male",
      age: 5,
      address: "hania ka ghar",
      status: "suspended",
    },
  ]);

  const saveUserDetailsData = async (key) => {
    try {
      setEditingKey("");
    } catch (error) {
      throw new Error(error);
    }
  };

  // This function cancels the editing mode.
  const onCancel = () => {
    setEditingKey("");
  };

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

  const deleteUserDetailsData = async (record) => {
    try {
      const filteredData = userDetailsData.filter(
        (user) => user.firstName !== "Hania"
      );
      setUserDetailsData(filteredData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error(error);
    }
  };

  const columns = userDetailsConfig(
    editingKey,
    saveUserDetailsData,
    onCancel,
    onEdit,
    deleteUserDetailsData
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
        inputProps:
          col.dataIndex === "status" && record.status === "invited"
            ? {
                options: [],
              }
            : col.inputProps,
        editing: record.key === editingKey,
      }),
    };
  });

  return (
    <div>
      <h1>Ant Design Stupid table is below:</h1>
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

export default userDetails;
