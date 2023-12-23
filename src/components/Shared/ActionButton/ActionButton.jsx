import React from "react";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Popconfirm } from "antd";
import CustomButton from "../CustomButton/CustomButton";
import { userStatusTypes } from "../../../enums";

const ActionButton = ({
  onSave,
  record,
  onCancel,
  editingKey,
  onEdit,
  onDelete = () => {},
}) => {
  const editable = record.key === editingKey;

  return editable ? (
    <div className="flex items-center justify-evenly">
      <Popconfirm
        title="Are you sure?"
        okButtonProps={{ type: "default" }}
        onConfirm={() => onSave(record)}
      >
        <CustomButton
          className="w-1 bg-yale-blue text-white"
          icon={<CheckOutlined />}
        />
      </Popconfirm>
      <CustomButton
        className="w-1 bg-yale-blue text-white"
        icon={<CloseOutlined />}
        onClick={onCancel}
      />
    </div>
  ) : (
    <div className="flex items-center justify-center gap-5">
      {/* Edit Button */}
      <CustomButton
        className="w-1 bg-yale-blue text-white"
        disabled={editingKey !== ""}
        onClick={() => onEdit(record)}
        icon={<EditOutlined />}
      />
      {/* Delete Button */}
      <Popconfirm
        title="Are you sure?"
        okButtonProps={{ danger: true }}
        onConfirm={() => onDelete(record)}
        onCancel={onCancel}
      >
        <CustomButton
          className="w-1 bg-yale-blue text-white"
          disabled={
            editingKey !== "" || record.status === userStatusTypes.SUSPENDED
          }
          icon={<DeleteOutlined />}
        />
      </Popconfirm>
    </div>
  );
};

export default ActionButton;
