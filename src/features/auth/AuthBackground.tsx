import React from 'react'
import auth_bg from "../../assets/imgs/auth_bg.webp";
import { IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const AuthBackground = () => {
  return (
    <div
        className="border h-full w-[50%] rounded-[16px] flex flex-col justify-between p-3"
        style={{
          backgroundImage: `url(${auth_bg})`,
          backgroundSize: "cover",
          backgroundPositionX: "-100px",
        }}
      >
        <div>

          
        </div>
        <div
          className="relative w-full rounded-[8px] p-8
                    bg-white/10 backdrop-blur-xl border border-white/20
                    shadow-xl text-white"
        >
          <p className="text-[14px]">
            "This pension platform gives me complete confidence in my future. I
            can clearly see every contribution, track my progress, and feel
            assured that my retirement is being handled responsibly. It brings
            transparency, peace of mind, and trust into long-term financial
            planning"
          </p>

          <div className="mt-10 flex justify-between items-end">
            <div>
              <h1 className="optima text-[20px]">Alimi Samuel</h1>
              <p className="text-gray-300 text-[14px]">Front End Developer</p>
              <p className="text-gray-300 text-[12px]">This Company</p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarOutlineIcon key={i} sx={{ fontSize: "12px" }} />
                ))}
              </div>
            </div>

            <div>
              <IconButton sx={{ border: "1px solid #ccc", mr: 2 }}>
                <ArrowBackIosNewRoundedIcon
                  sx={{ color: "white", fontSize: "18px" }}
                />
              </IconButton>
              <IconButton sx={{ border: "1px solid #ccc" }}>
                <ArrowForwardIosRoundedIcon
                  sx={{ color: "white", fontSize: "18px" }}
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AuthBackground;
