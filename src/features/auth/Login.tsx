import React from "react";

import logo from "../../assets/logo/logo.png";
import PmInput from "../../components/UI/PmInput";
import AuthBackground from "./AuthBackground";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PmButton from "../../components/UI/PmButton";
import { PATHS } from "../../routes/route.path";
import { useAuth } from "../../hooks/useAuth";
import type { UserRole } from "../../services/api";

interface LoginErrors {
  username?: string;
  password?: string;
}

const Login = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    role: "member" as UserRole,
  });

  const { username, password, role } = formData;

  const [errors, setErrors] = React.useState<LoginErrors>({});
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setServerError(null);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value as UserRole }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setServerError(null);
  };

  const validate = (): boolean => {
    const nextErrors: LoginErrors = {};

    if (!username.trim()) {
      nextErrors.username = "Username or email is required";
    }

    if (!password) {
      nextErrors.password = "Password is required";
    } else if (password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      setServerError(null);

      await login({ username, password, role });

      const redirectTo =
        (location.state as { redirectTo?: string } | null)?.redirectTo ||
        PATHS.DASHBOARD;

      navigate(redirectTo, { replace: true });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to sign in. Please try again.";
      setServerError(message);
    } finally {
      setLoading(false);
    }
  };

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
              <PmInput
                onChange={handleInputChange}
                name="username"
                value={username}
                placeholder="Username/Email"
                fullWidth
                error={Boolean(errors.username)}
                helperText={errors.username}
              />
            </div>
            <div className="block mt-3  ">
              <div className="flex items-center justify-between">
                <label className="block mb-2 text-[14px] font-medium text-gray-700">
                  Password
                </label>
                <Link
                  to={PATHS.FORGOT_PASSWORD}
                  className="text-sm text-red-500 hover:underline float-right mb-2"
                >
                  Forgot Password?
                </Link>
              </div>
              <PmInput
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                placeholder="Password"
                fullWidth
                error={Boolean(errors.password)}
                helperText={errors.password}
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-[14px] font-medium text-gray-700">
                Sign in as
              </label>
              <select
                name="role"
                value={role}
                onChange={handleRoleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              >
                <option value="member">Member</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {serverError && (
              <p className="mt-3 text-sm text-red-500">{serverError}</p>
            )}

            <div className="mt-6">
              <PmButton
                loading={loading}
                disabled={loading}
                type="submit"
                title="Sign In"
                fullWidth
                variant="primary"
              />
            </div>
            <p className="text-center mt-4 text-[14px]">
              Don't have an account? <b>Sign up today!</b>
            </p>
          </form>
        </div>
      </div>
      <AuthBackground />
    </div>
  );
};

export default Login;
