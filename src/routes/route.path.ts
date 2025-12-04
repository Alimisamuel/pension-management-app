export const PATHS = {

  /* AUTH */
  LOGIN: "/login",
  LOGIN_OTP: "/login-otp",
  SIGNUP: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  SET_PASSWORD: "/reset-password",
  VERIFY_OTP: "/verify-otp",
  ACCOUNT_SUCCESSFUL: "/account-created",

  /* CORE DASHBOARD */
  DASHBOARD: "/" ,

  /* PROFILE */
  PROFILE: "/dashboard/profile",
  EDIT_PROFILE: "/edit-profile",
  NEXT_OF_KIN: "/profile/next-of-kin",
  EMPLOYER_INFO: "/profile/employer",

  /* CONTRIBUTIONS */
  CONTRIBUTIONS: "/dashboard/contributions",
  ADD_CONTRIBUTION: "/dashboard/contributions/new",
  CONTRIBUTION_DETAILS: "/contributions/:id",

  /* STATEMENTS */
  STATEMENTS: "/statements",
  EXPORT_STATEMENT: "/statements/export",
  BENEFIT_CALCULATOR: "/statements/benefit-calculator",

  /* NOTIFICATIONS */
  NOTIFICATIONS: "/notifications",

  /* ADMIN */
  ADMIN: {
    DASHBOARD: "/admin",
    MEMBERS: "/admin/members",
    CONTRIBUTIONS: "/admin/contributions",
    REPORTS: "/admin/reports",
    SETTINGS: "/admin/settings"
  },

  /* SETTINGS */
  SETTINGS: {
    PROFILE: "/settings/profile",
    SECURITY: "/settings/security",
    NOTIFICATIONS: "/settings/notifications",
    EMAIL_PREFS: "/settings/email-preferences",
    FAQ: "/settings/faqs"
  },

  /* LEGAL */
  TERMS: "/terms",
  PRIVACY_POLICY: "/privacy-policy",
  COOKIE_POLICY: "/cookie-policy",

  /* SUPPORT */
  HELP_CENTER: "/support"

};
