import { AppBar, Avatar, IconButton } from "@mui/material";
import React from "react";
import logo from "../assets/logo/logo.png";
import PmInput from "../components/UI/PmInput";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import avat from "../assets/imgs/avatar.png";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const { user } = useAuth();

  const displayName = user?.name || "Guest";
  const roleLabel = user ? user.role === "admin" ? "Admin" : "Member" : "";

  return (
    <AppBar sx={{ background: "transparent", boxShadow: "none" }}>
      <div className="bg-white shadow h-[80px] flex items-center ">
        <div className="w-[90%] mx-auto gap-x-5 p-4 flex items-center justify-between">
          <div className="w-[15%]">
            <img src={logo} alt="logo" width={50} />
          </div>
          <div className="flex-1 w-full ">
            <div className="flex items-center ">
              <div className=" w-[50%]">
                <PmInput
                  fullWidth
                  minHeight="40px"
                  placeholder="Search information"
                  placeholderColor="#bbbbba"
                />
              </div>
              <div className="bg-dark -ml-3 px-5 h-[40px] z-10 rounded-r-[4px] flex items-center justify-center">
                <SearchRoundedIcon />
              </div>
            </div>
          </div>
          <div className="w-[20%] flex items-center justify-between ">
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>

            <div className="flex gap-x-2 items-center">
              <Avatar src={avat} />
              <div>
                <p className="optima text-black">{displayName}</p>
                {roleLabel && (
                  <p className="text-black text-[12px] leading-3 capitalize">
                    {roleLabel}
                  </p>
                )}
              </div>
              <ExpandMoreOutlinedIcon sx={{ color: "#333" }} />
            </div>
          </div>
        </div>
      </div>
    </AppBar>
  );
};

export default Header;
