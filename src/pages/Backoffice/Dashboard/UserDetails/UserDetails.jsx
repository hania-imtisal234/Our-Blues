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
      phoneNumber: "0331-2575044",
      lastName: "Imtisal",
      email: "hania@gmail.com",
      gender: "female",
      age: 20,
      address: "Faisal Town",
      status: "suspended",
    },
  ]);

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
  const columns = userDetailsConfig(
    editingKey,
    onSave,
    onCancel,
    onEdit,
    onDelete
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

export default userDetails;
