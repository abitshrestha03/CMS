import { NavLink } from "react-router-dom";
import ChatIcon from "../../public/icons/ChatIcon";
import DashboardIcon from "../../public/icons/DashboardIcon";
import PaymentIcon from "../../public/icons/PaymentIcon";
import TimelineIcon from "../../public/icons/TimelineIcon";
import SupportIcon from "../../public/icons/SupportIcon";
import LogoutIcon from "../../public/icons/LogoutIcon";

const DashboardSidebar = () => {
  const menuItems = [
    { label: "DASHBOARD", icon: <DashboardIcon />, path: "/dashboard" },
    { label: "TIMELINE", icon: <TimelineIcon />, path: "/timeline" },
    { label: "CHATS", icon: <ChatIcon />, path: "/chats" },
    { label: "ASSETS", icon: <PaymentIcon/>, path: "/assets" },
  ];

  return (
    <div className="h-screen w-[135px] bg-white border-r flex flex-col items-center py-6">
      <div className="text-xl font-bold mb-52">LOGO</div>
      <div className="flex flex-col items-center space-y-8">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-blue-500" : "text-gray-400"
              }`
            }
          >
            <div className="mb-1">{item.icon}</div>
            <p className="text-xs">{item.label}</p>
          </NavLink>
        ))}
      </div>
      <div className="mt-auto flex flex-col items-center space-y-8">
        <NavLink
          to="/help-support"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500" : "text-gray-400"
            }`
          }
        >
          <div className="mb-1">
            <SupportIcon />
          </div>
          <p className="text-xs">HELP & SUPPORT</p>
        </NavLink>
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500" : "text-gray-400"
            }`
          }
        >
          <div className="mb-1">
            <LogoutIcon />
          </div>
          <p className="text-xs">LOG OUT</p>
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardSidebar;
