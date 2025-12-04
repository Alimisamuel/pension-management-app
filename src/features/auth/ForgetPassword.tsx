import React from "react";

import logo from "../../assets/logo/logo.png";
import PmInput from "../../components/UI/PmInput";
import AuthBackground from "./AuthBackground";
import { Link, useNavigate } from "react-router-dom";
import PmButton from "../../components/UI/PmButton";
import { PATHS } from "../../routes/route.path";

const ForgetPassword = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 3000);
  };

  return (
    <div className="h-screen flex p-3">
      <div className="flex-1">
        <div className="mx-auto w-[70%] flex flex-col justify-center h-full">
          <img src={logo} alt="logo" className="w-[100px]" />
          <h1 className="optima text-[35px]">Forgot Password</h1>
          <p>Please input your registered email to reset your password</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block mt-6 mb-2 text-[14px] font-medium text-gray-700">
                Username/Email
              </label>
              <PmInput
                onChange={handleChange}
                name="username"
                value={username}
                placeholder="Username/Email"
                fullWidth
              />
            </div>
          

            <div className="mt-6">
              <PmButton
              loading={loading}
                disabled={!username || !password}
                type="submit"
                title="Forgot password"
                fullWidth
                variant="primary"
              />
            </div>
            <p className="text-center mt-4 text-[14px]">
              Remember Password? <Link to={PATHS.LOGIN}><b>Sign in</b></Link>
            </p>
          </form>
        </div>
      </div>
      <AuthBackground />
    </div>
  );
};

export default ForgetPassword;
