import { UserOutlined } from "@ant-design/icons";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";

export const adminMenuItems = [
  {
    key: "first",
    label: <div className="text-white">Users</div>,
    title: <div className="text-white">Users</div>,
    route: "/backoffice/users",
    icon: <UserOutlined style={{ color: "white" }} />,
    subItems: [
      {
        key: "second",
        label: <div className="text-white">Patients</div>,
        title: "Patients",
        route: "/backoffice/users",
        icon: <UserOutlined style={{ color: "white" }} />,
      },
      {
        key: "third",
        label: <div className="text-white">Therapists</div>,
        title: "Therapists",
        route: "/backoffice/users/therapists",
        icon: <UserOutlined style={{ color: "white" }} />,
      },
    ],
  },
  {
    key: "fourth",
    label: <div className="text-white">Verification</div>,
    title: "Verification",
    route: "/backoffice/verification",
    icon: <DomainVerificationIcon style={{ color: "white" }} />,
  },
];

export const therapistMenuItems = [
  {
    key: "first",
    label: <div className="text-white">Appointments</div>,
    title: <div className="text-white">Appointments</div>,
    route: "/backoffice/appointments",
    icon: <UserOutlined style={{ color: "white" }} />,
  },
  {
    key: "second",
    label: <div className="text-white">Edit profile</div>,
    title: "EditProfile",
    route: "/backoffice/editProfile",
    icon: <DomainVerificationIcon style={{ color: "white" }} />,
    subItems: [
      {
        key: "third",
        label: (
          <div className="text-white" id="viewProfile">
            View Profile
          </div>
        ),
        title: "ViewProfile",
        route: "/backoffice/editProfile-view",
        icon: <UserOutlined style={{ color: "white" }} />,
      },
      {
        key: "fourth",
        label: <div className="text-white">Set Fees & Time</div>,
        title: "SetFee&Time",
        route: "/backoffice/editProfile/set-fee-time",
        icon: <UserOutlined style={{ color: "white" }} />,
      },
    ],
  },
];
