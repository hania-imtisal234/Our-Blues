import ActionButton from "../../../../components/Shared/ActionButton/ActionButton";
import { FormRule } from "../../../../constants/formRules";
import {
  InputType,
  userGenderOptions,
  userGenderTypes,
  userStatusTypeOptions,
  userStatusTypes,
} from "../../../../enums";
import { getLabelForKey, validateName } from "../../../../utils";

// This function returns an array of columns for User Details Table.
export const userDetailsConfig = (
  editingKey,
  onSave,
  onCancel,
  onEdit,
  onDelete
) => {
  return [
    {
      title: "S.No",
      dataIndex: "sNo",
      key: "sNo",
      editable: false,
      inputType: InputType.STRING,
      align: "center",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      editable: true,
      inputType: InputType.STRING,
      align: "center",
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
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      editable: true,
      inputType: InputType.STRING,
      align: "center",
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
      title: "Phone Number",
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
      title: "Email",
      dataIndex: "email",
      key: "email",
      editable: false,
      inputType: InputType.STRING,
      align: "center",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      editable: true,
      inputType: InputType.SELECT,
      inputProps: {
        options: userGenderOptions,
      },
      align: "center",
      render: (text) => getLabelForKey(userGenderOptions, text),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      editable: true,
      inputType: InputType.NUMBER,
      align: "center",
      inputProps: {
        rules: FormRule.AGE,
      },
    },
    {
      title: "Address",
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
      title: "Status",
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
      title: "Action",
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
