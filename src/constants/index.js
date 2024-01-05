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
    label: <div className="text-white">View profile</div>,
    title: "View Profile",
    route: "/backoffice/viewProfile",
    icon: <DomainVerificationIcon style={{ color: "white" }} />,
    subItems: [
      {
        key: "third",
        label: (
          <div className="text-white" id="editProfile">
            Edit Profile
          </div>
        ),
        title: "ViewProfile",
        route: "/backoffice/ViewProfile/edit",
        icon: <UserOutlined style={{ color: "white" }} />,
      },
      {
        key: "fourth",
        label: <div className="text-white">Change Password</div>,
        title: "ChangePassword",
        route: "/backoffice/viewProfile/changePassword",
        icon: <UserOutlined style={{ color: "white" }} />,
      },
      {
        key: "fifth",
        label: <div className="text-white">Set Fees & Time</div>,
        title: "SetFee&Time",
        route: "/backoffice/editProfile/set-fee-time",
        icon: <UserOutlined style={{ color: "white" }} />,
      },
    ],
  },
];
