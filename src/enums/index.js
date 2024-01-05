import { Input, InputNumber, Select, Switch } from "antd";

// Input types for Ant Design.
export const InputType = {
  SELECT: "select",
  TEXT: "text",
  STRING: "string",
  NUMBER: "number",
  SWITCH: "switch",
  EMAIL: "email",
};

// Input Types for Ant Design Editable Table.
export const editableTableInputConfig = (inputProps) => ({
  [InputType.NUMBER]: <InputNumber {...inputProps} />,
  [InputType.STRING]: <Input {...inputProps} />,
  [InputType.EMAIL]: <Input {...inputProps} />,
  [InputType.SELECT]: <Select {...inputProps} />,
  [InputType.SWITCH]: <Switch {...inputProps} />,
});

export const userGenderTypes = {
  MALE: "male",
  FEMALE: "female",
  OTHER: "other",
};

export const userGenderOptions = [
  {
    key: userGenderTypes.MALE,
    value: userGenderTypes.MALE,
    label: "Male",
  },
  {
    key: userGenderTypes.FEMALE,
    value: userGenderTypes.FEMALE,
    label: "Female",
  },
  {
    key: userGenderTypes.OTHER,
    value: userGenderTypes.OTHER,
    label: "Other",
  },
];

export const userStatusTypes = {
  ACTIVE: "active",
  SUSPENDED: "suspended",
};

export const userStatusTypeOptions = [
  {
    key: userStatusTypes.ACTIVE,
    value: userStatusTypes.ACTIVE,
    label: "Active",
  },
  {
    key: userStatusTypes.SUSPENDED,
    value: userStatusTypes.SUSPENDED,
    label: "deactivated",
  },
];
export const appointmentStatusTypes = {
  INPROCESS: "in-process",
  CONFIRMED: "confirmed",
  CANCELLED: "cancelled",
};

export const appointmentStatusTypeOptions = [
  {
    key: appointmentStatusTypes.INPROCESS,
    value: appointmentStatusTypes.INPROCESS,
    label: "in-Process",
  },
  {
    key: appointmentStatusTypes.CONFIRMED,
    value: appointmentStatusTypes.CONFIRMED,
    label: "confirmed",
  },
  {
    key: appointmentStatusTypes.CANCELLED,
    value: appointmentStatusTypes.CANCELLED,
    label: "cancelled",
  },
];
