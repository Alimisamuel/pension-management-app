import React from "react";

import logo from "../../assets/logo/logo.png";
import PmInput from "../../components/UI/PmInput";
import AuthBackground from "./AuthBackground";
import { Link, useNavigate } from "react-router-dom";
import PmButton from "../../components/UI/PmButton";

const Login = () => {

    const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const {username, password} = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate("/");
  }
  
  return (
    <div className="h-screen flex p-3">
      <div className="flex-1">
        <div className="mx-auto w-[70%] flex flex-col justify-center h-full">
          <img src={logo} alt="logo" className="w-[100px]" />
          <h1 className="optima text-[35px]">Welcome Back</h1>
          <p>Welcome back! Please enter your details below.</p>
          <form onSubmit={handleSubmit}>
          <div>
            <label className="block mt-6 mb-2 text-[14px] font-medium text-gray-700">
              Username/Email
            </label>
            <PmInput onChange={handleChange} name="username" value={username}  placeholder="Username/Email" fullWidth />
          </div>
          <div className="block mt-3  ">
            <div className="flex items-center justify-between">
              <label className="block mb-2 text-[14px] font-medium text-gray-700">
                Password
              </label>
              <Link
                to="/forget-password"
                className="text-sm text-red-500 hover:underline float-right mb-2"
              >
                Forgot Password?
              </Link>
            </div>
            <PmInput  type="password" name="password" value={password} onChange={handleChange} placeholder="Password" fullWidth />
          </div>

          <div className="mt-6">
            <PmButton disabled={!username || !password} type="submit" title="Sign In" fullWidth variant="primary"/>
          </div>
          <p className="text-center mt-4 text-[14px]">Don't have an account? <b>Sign up today!</b></p>
          </form>
        </div>
      </div>
      <AuthBackground />
    </div>
  );
};

export default Login;
