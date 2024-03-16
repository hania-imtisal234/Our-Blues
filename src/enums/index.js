import { Input, InputNumber, Select, Switch } from "antd";
import { UserOutlined } from "@ant-design/icons";
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

export const Therapists = [
  {
    id: 1,
    email: "l201026@lhr.nu.edu.pk",
    name: "Therapist 1",
    title: "Psychiatrist",
    qualification: "MBBS, FCPS",
    rating: 4.5,
    review: "Great Therapist",
    availability: ["Monday", "Wednesday", "Friday"],
    experience: "12 Years",
    profile: <UserOutlined style={{ color: "white" }} />,
  },
  {
    id: 2,
    email: "therapist2@gmail.com",
    name: "Therapist 2",
    title: "Psychiatrist",
    qualification: "MBBS, FCPS",
    rating: 3.8,
    review: "1- Had a really good experience, defintely helpful.",
    availability: ["Tuesday", "Thursday"],
    experience: "9 Years",
    profile: <UserOutlined style={{ color: "white" }} />,
  },
  {
    id: 3,
    name: "Therapist 3",
    email: "therapist3@gmail.com",
    title: "Psychiatrist",
    qualification: "MBBS, FCPS",
    rating: 5.0,
    review: "Definitely suggest it",
    availability: ["Monday", "Thursday", "Saturday"],
    experience: "15 Years",
    profile: <UserOutlined style={{ color: "white" }} />,
  },
  {
    id: 4,
    name: "Therapist 4",
    email: "therapist4@gmail.com",
    title: "Psychiatrist",
    qualification: "MBBS, FCPS",
    rating: 4.0,
    review: "Definitely suggest it",
    availability: ["Monday", "Thursday", "Saturday"],
    experience: "14 Years",
    profile: <UserOutlined style={{ color: "white" }} />,
  },
];

export const Payments = {
  userId: 1,
  userName: "Hania",
  userEmail: "hania.imtisal234@gmail.com",
  therapistId: 1,
  therapistName: "Therapist 1",
  amount: 1000,
  currency: "PKR",
  address: "NFC,Lahore",
};

export const Roles = {
  therapist: "therapist",
  user: "user",
  admin: "admin",
};
