import React from "react";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import PmButton from "../../components/UI/PmButton";
import { Avatar, Divider, Grid } from "@mui/material";
import avatar from "../../assets/imgs/avatar.png";
import logo from "../../assets/logo/logo.png";

const Dashboard = () => {
  return (
    <div className="pt-20 ">
      <div className="mx-auto mt-20 w-[90%]  h-20">
        <div className="flex items-center justify-between">
          <h1 className="text-primary text-[30px] optima">Dashboard</h1>
          <p className=" text-[14px]">
            <LocalPrintshopOutlinedIcon sx={{ mr: 1, textSize: "13px" }} />
            Print
          </p>
        </div>

        <div className="bg-dark p-10 rounded-[12px] py-7">
          <div>
            <div>
              <p className="text-white optima text-[20px]">
                Welcome back, Alimi Samuel
              </p>
              <p className="text-text-light mt-2 text-[14px]">
                The best place for pension schem
              </p>
              <div className="w-fit mt-6">
                <PmButton variant="primary" title="Learn More" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Grid container spacing={2}>
            <Grid size={6}>
              <p className="mb-3 text-primary font-[500]">User Profile</p>
              <div className="bg-white w-full p-10 py-8 shadow-md rounded-[10px]">

                <div className="bg-primary/20 px-9 py-5 mb-7 rounded-[9px]">
                     <p className="text-[14px] text-black font-[400] mt-0.5">
                       Account Balance
                      </p>  
                      <p className="optima text-black text-[21px]">N 30,000,000</p>
                </div>
                <div className="flex items-center justify-between">
                  <Avatar sx={{ width: "70px", height: "70px" }} src={avatar} />

                  <div className="flex items-center flex-1 ml-10">
                    <div className="w-1/2">
                      <p className="text-[14px] text-black font-[400]">Name</p>
                      <p className="text-[14px] text-black font-[400] mt-0.5">
                        Date of Joining
                      </p>
                      <p className="text-[14px] text-black font-[400] mt-0.5">
                        Marital Status
                      </p>
                      <p className="text-[14px] text-black font-[400] mt-0.5">
                        RSA
                      </p>
                      <p className="text-[14px] text-black font-[400] mt-0.5">
                        Status
                      </p>
                    </div>
                    <div className="w-1/2">
                      <p className="text-[14px] text-text-secondary">
                        Alimi Samuel
                      </p>
                      <p className="text-[14px] text-text-secondary mt-0.5">
                        July 25, 2025
                      </p>
                      <p className="text-[14px] text-text-secondary mt-0.5">
                        Single
                      </p>
                      <p className="text-[14px] text-text-secondary mt-0.5">
                       PEN-20039333
                      </p>
                      <p className="text-[14px] text-green-600 mt-0.5">
                       Active
                      </p>
                    </div>
                  </div>
                </div>
                <Divider sx={{ my: 3 }} />
                <div className="flex items-center flex-1 ml-10 gap-x-6">
                  <div className="">
                    <p className="text-[14px] text-black font-[400]">Address</p>
                  </div>
                  <div className="">
                    <p className="text-[14px] text-text-secondary">
                      32 Lawson street, Obalende, Lagos
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
        <Grid size={6}>
 <Grid container spacing={2}>
       <Grid size={12}>
              <p className="mb-3 text-primary font-[500]">Employer's Profile</p>
              <div className="bg-white w-full p-10 shadow-md rounded-[10px]">
                <div className="flex items-center justify-between">
                  <Avatar sx={{ width: "50px", height: "50px" }} src={logo} />

                  <div className="flex items-center flex-1 ml-10">
                    <div className="w-1/2">
                      <p className="text-[14px] text-black font-[400]">
                        Company Name
                      </p>
                      <p className="text-[14px] text-black font-[400] mt-0.5">
                     Employee ID
                      </p>
                      <p className="text-[14px] text-black font-[400] mt-0.5">
                        HR Manager Name
                      </p>
                    </div>
                    <div className="w-1/2">
                      <p className="text-[14px] text-text-secondary">
                        NLPC Pension
                      </p>
                      <p className="text-[14px] text-text-secondary mt-0.5">
                       NLPC-IT-209
                      </p>
                      <p className="text-[14px] text-text-secondary mt-0.5">
                        Joy Oweanyi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
                <Grid size={12}>
              <p className="mb-3  text-primary font-[500]">Pension Details</p>
              <div className="bg-white w-full p-10 shadow-md rounded-[10px]">
                <div className="flex items-center justify-between">
            

                  <div className="flex items-center flex-1">
                    <div className="w-1/2">
                      <p className="text-[14px] text-black font-[400]">
                       Scheme:
                      </p>
                      <p className="text-[14px] text-black font-[400] mt-0.5">
                     Employee %:
                      </p>
                      <p className="text-[14px] text-black font-[400] mt-0.5">
                   Employer %: 
                      </p>
                      <p className="text-[14px] text-black font-[400] mt-0.5">
               Pension Start
                      </p>
                    </div>
                    <div className="w-1/2">
                      <p className="text-[14px] text-text-secondary">
                        Mandatory
                      </p>
                      <p className="text-[14px] text-text-secondary mt-0.5">
                        8%
                      </p>
                      <p className="text-[14px] text-text-secondary mt-0.5">
                       10%
                      </p>
                      <p className="text-[14px] text-text-secondary mt-0.5">
                      12 July 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
 </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
