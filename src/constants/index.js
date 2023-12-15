import { UserOutlined } from "@ant-design/icons";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";

export const adminMenuItems = [
  {
    key: "first",
    label: <div className="text-white">First</div>,
    title: "first",
    route: "/backoffice/first",
    icon: <UserOutlined style={{ color: "white" }} />,
  },
  {
    key: "second",
    label: <div className="text-white">Second</div>,

    title: "second",
    route: "/backoffice/second",
    icon: <UserOutlined style={{ color: "white" }} />,
  },
  {
    key: "third",
    label: <div className="text-white">Third</div>,
    title: "third",
    route: "/backoffice/third",
    icon: <UserOutlined style={{ color: "white" }} s />,
  },
];
