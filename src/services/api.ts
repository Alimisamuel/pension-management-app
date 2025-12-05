export type UserRole = "admin" | "member";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface LoginPayload {
  username: string;
  password: string;
  role: UserRole;
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
}

// Very small in-memory mock "backend" for authentication.
// In a real app this would be HTTP calls.

function fakeNetworkDelay<T>(result: T, delay = 700): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(result), delay));
}

export async function loginApi(payload: LoginPayload): Promise<LoginResponse> {
  const { username, password, role } = payload;

  // Very naive validation to simulate server-side checks
  if (!username || !password) {
    throw new Error("Username and password are required.");
  }

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }

  const normalizedEmail = username.toLowerCase();

  // Simple mock user record
  const user: AuthUser = {
    id: "mock-user-1",
    name: normalizedEmail.includes("admin") ? "Admin User" : "Member User",
    email: normalizedEmail,
    role,
  };

  const token = `mock-token-${Date.now()}`;

  return fakeNetworkDelay({ token, user });
}

export async function requestPasswordResetApi(email: string): Promise<void> {
  if (!email) {
    throw new Error("Email is required.");
  }

  // Pretend we verified that the email exists and sent an email.
  await fakeNetworkDelay(null, 800);
}
