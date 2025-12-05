import React, { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import type { AuthUser, UserRole, LoginPayload, LoginResponse } from "../services/api";
import { loginApi as loginRequest } from "../services/api";

interface AuthState {
  user: AuthUser | null;
  token: string | null;
}

interface AuthContextValue extends AuthState {
  isAuthenticated: boolean;
  login: (payload: Omit<LoginPayload, "role"> & { role: UserRole }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const LOCAL_STORAGE_KEY = "pension-app-auth";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useLocalStorage<AuthState>(LOCAL_STORAGE_KEY, {
    user: null,
    token: null,
  });

  const login = async (payload: Omit<LoginPayload, "role"> & { role: UserRole }) => {
    const response: LoginResponse = await loginRequest({
      username: payload.username,
      password: payload.password,
      role: payload.role,
    });

    setAuthState({ user: response.user, token: response.token });
  };

  const logout = () => {
    setAuthState({ user: null, token: null });
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      user: authState.user,
      token: authState.token,
      isAuthenticated: Boolean(authState.token && authState.user),
      login,
      logout,
    }),
    [authState, login, logout]
  );

  return React.createElement(AuthContext.Provider, { value }, children);
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
};
