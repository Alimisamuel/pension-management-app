import React from "react";

import logo from "../../assets/logo/logo.png";
import PmInput from "../../components/UI/PmInput";
import AuthBackground from "./AuthBackground";
import { Link, useNavigate } from "react-router-dom";
import PmButton from "../../components/UI/PmButton";
import { PATHS } from "../../routes/route.path";
import { requestPasswordResetApi } from "../../services/api";

interface ForgotErrors {
  username?: string;
}

const ForgetPassword = () => {
  const [formData, setFormData] = React.useState({
    username: "",
  });

  const { username } = formData;

  const [errors, setErrors] = React.useState<ForgotErrors>({});
  const [loading, setLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null
  );
  const [serverError, setServerError] = React.useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({});
    setServerError(null);
    setSuccessMessage(null);
  };

  const validate = (): boolean => {
    const nextErrors: ForgotErrors = {};

    if (!username.trim()) {
      nextErrors.username = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
      nextErrors.username = "Enter a valid email address";
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

      await requestPasswordResetApi(username);

      setSuccessMessage(
        "If this email is registered, we’ve sent password reset instructions."
      );

      // Optionally redirect back to login after a short delay
      setTimeout(() => {
        navigate(PATHS.LOGIN);
      }, 2000);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Unable to process request. Please try again.";
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
                placeholder="you@example.com"
                fullWidth
                error={Boolean(errors.username)}
                helperText={errors.username}
              />
            </div>

            {serverError && (
              <p className="mt-3 text-sm text-red-500">{serverError}</p>
            )}
            {successMessage && (
              <p className="mt-3 text-sm text-green-600">{successMessage}</p>
            )}

            <div className="mt-6">
              <PmButton
                loading={loading}
                disabled={loading}
                type="submit"
                title="Send reset link"
                fullWidth
                variant="primary"
              />
            </div>
            <p className="text-center mt-4 text-[14px]">
              Remember Password?{" "}
              <Link to={PATHS.LOGIN}>
                <b>Sign in</b>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <AuthBackground />
    </div>
  );
};

export default ForgetPassword;
