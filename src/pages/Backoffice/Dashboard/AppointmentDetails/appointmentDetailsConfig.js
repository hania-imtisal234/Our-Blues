import ActionButton from "../../../../components/Shared/ActionButton/ActionButton";
import { FormRule } from "../../../../constants/formRules";
import {
  InputType,
  appointmentStatusTypeOptions,
  appointmentStatusTypes,
} from "../../../../enums";
import { getLabelForKey, validateName } from "../../../../utils";

// This function returns an array of columns for User Details Table.
export const appointmentDetailsConfig = (
  editingKey,
  onSave,
  onCancel,
  onEdit,
  onDelete,
  isdeleteAllowed
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
      editable: false,
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
      editable: false,
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
      editable: false,
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
      title: <div className="text-sm text-yale-blue">Appointment Time</div>,
      dataIndex: "appointmentTime",
      key: "appointmentTime",
      editable: false,
      inputType: InputType.STRING,
      width: "12%",
      inputProps: {
        rules: FormRule.TIME,
      },
      align: "center",
    },
    {
      title: <div className="text-sm text-yale-blue">Appointment Date</div>,
      dataIndex: "appointmentDate",
      key: "appointmentDate",
      editable: false,
      inputType: InputType.STRING,
      align: "center",
      width: "12%",
    },

    {
      title: <div className="text-sm text-yale-blue">Status</div>,
      dataIndex: "status",
      key: "role",
      width: "15%",
      editable: true,
      inputType: InputType.SELECT,
      inputProps: {
        options: appointmentStatusTypeOptions,
      },
      align: "center",
      className: "table-team status",
      render: (text) => getLabelForKey(appointmentStatusTypeOptions, text),
    },
    {
      title: "",
      dataIndex: "action",
      align: "center",
      width: "9%",
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
            isdeleteAllowed={"false"}
          />
        );
      },
    },
  ];
};
