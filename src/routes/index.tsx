import { useRoutes } from "react-router-dom";
import { PATHS,  } from "./route.path";
import { ForgetPassword, Login } from "../features/auth";
import DashboardLayout from "../layouts";
import Dashboard from "../features/dashboard";
import ContributionPage from "../features/contributions";
import StatementPage from "../features/statements";


export function Routes() {
  let element = useRoutes([
  
    {
      path: PATHS.LOGIN,
      element: <Login />,
    },

    {
      path: PATHS.FORGOT_PASSWORD,

      element: <ForgetPassword/>,
    },
  
  
    {
      element: <DashboardLayout />,
      children: [
        {
          path: PATHS.DASHBOARD,
          element: <Dashboard />,
        },
        {
          path: PATHS.CONTRIBUTIONS,
          element: <ContributionPage />,
        },
        {
          path: PATHS.STATEMENTS,
          element: <StatementPage />,
        },
      ],
    },
   
   
  ]);
  return element;
}