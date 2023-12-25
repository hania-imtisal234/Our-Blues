import ActionButton from "../../../../components/Shared/ActionButton/ActionButton";
import CustomButton from "../../../../components/Shared/CustomButton/CustomButton";
import { FormRule } from "../../../../constants/formRules";
import {
  InputType,
  userGenderOptions,
  userStatusTypeOptions,
} from "../../../../enums";
import { getLabelForKey, validateName } from "../../../../utils";

// This function returns an array of columns for User Details Table.
export const therapistDetailsConfig = (
  editingKey,
  onSave,
  onCancel,
  onEdit,
  onDelete,
  onPreview
) => {
  return [
    {
      title: "",
      dataIndex: "sNo",
      key: "sNo",
      editable: false,
      inputType: InputType.STRING,
      align: "center",
      width: "5%",
    },
    {
      title: <div className="text-sm text-yale-blue">First Name</div>,
      dataIndex: "firstName",
      key: "firstName",
      editable: true,
      inputType: InputType.STRING,
      align: "center",
      width: "10%",
      inputProps: {
        rules: [
          () => ({
            async validator(_, value) {
              await validateName(value);
            },
          }),
        ],
      },
    },
    {
      title: <div className="text-sm text-yale-blue">Last Name</div>,
      dataIndex: "lastName",
      key: "lastName",
      editable: true,
      inputType: InputType.STRING,
      align: "center",
      width: "10%",
      inputProps: {
        rules: [
          () => ({
            async validator(_, value) {
              await validateName(value);
            },
          }),
        ],
      },
    },

    {
      title: <div className="text-sm text-yale-blue">Phone Number</div>,
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      editable: true,
      inputType: InputType.STRING,
      align: "center",
      inputProps: {
        rules: FormRule.PHONENUMBER_TABLE,
      },
    },
    {
      title: <div className="text-sm text-yale-blue">Email</div>,
      dataIndex: "email",
      key: "email",
      editable: false,
      inputType: InputType.STRING,
      align: "center",
    },
    {
      title: <div className="text-sm text-yale-blue">Gender</div>,
      dataIndex: "gender",
      key: "gender",
      editable: true,
      inputType: InputType.SELECT,
      width: "10%",
      inputProps: {
        options: userGenderOptions,
      },
      align: "center",
      render: (text) => getLabelForKey(userGenderOptions, text),
    },
    {
      title: <div className="text-sm text-yale-blue">Age</div>,
      dataIndex: "age",
      key: "age",
      editable: true,
      inputType: InputType.NUMBER,
      align: "center",
      width: "7%",
      inputProps: {
        rules: FormRule.AGE,
      },
    },
    {
      title: <div className="text-sm text-yale-blue">Address</div>,
      dataIndex: "address",
      key: "address",
      editable: true,
      inputType: InputType.STRING,
      align: "center",
      inputProps: {
        rules: FormRule.ADDRESS,
      },
    },
    {
      title: <div className="text-sm text-yale-blue">Status</div>,
      dataIndex: "status",
      key: "role",
      width: "10%",
      editable: true,
      inputType: InputType.SELECT,
      inputProps: {
        options: userStatusTypeOptions,
      },
      align: "center",
      className: "table-team status",
      render: (text) => getLabelForKey(userStatusTypeOptions, text),
    },
    {
      title: "Preview",
      dataIndex: "preview",
      key: "preview",
      render: (_, record) => (
        <CustomButton
          buttonLabel={"Preview"}
          className=" bg-yale-blue text-white"
          onClick={() => onPreview(record)}
        />
      ),
    },
    {
      title: "",
      dataIndex: "action",
      align: "center",
      width: "10%",
      key: "action",
      render: (_, record) => {
        return (
          <ActionButton
            onSave={onSave}
            record={record}
            onCancel={onCancel}
            editingKey={editingKey}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        );
      },
    },
  ];
};
