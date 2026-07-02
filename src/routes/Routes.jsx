import { createBrowserRouter } from "react-router-dom";

import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import ForgotPassword from "../pages/authentication/ForgotPassword";
import CheckCode from "../pages/authentication/CheckCode";
import SetNewPassword from "../pages/authentication/SetNewPassword";
import Unauthorized from "../components/Unauthorized";
import Home from "../pages/homePage/Home";
import { AdminProvider } from "../context/AdminContext";
import MainLayout from "../layout/MainLayout";
import DashboardOrRedirect from "./DashboardOrRedirect";
import Leads from "../pages/leads/Leads";
import Campaigns from "../pages/campaigns/Campaigns";
import Nurture from "../pages/nurture/Nurture";
import Bookings from "../pages/bookings/Bookings";
import Reports from "../pages/reports/Reports";
import Billing from "../pages/billing/Billing";
import Settings from "../pages/settings/Settings";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgotPassword />,
  },
  {
    path: "/check-code",
    element: <CheckCode />,
  },
  {
    path: "/set-new-password",
    element: <SetNewPassword />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: (
      <AdminProvider>
        <MainLayout />
      </AdminProvider>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardOrRedirect />,
      },
      {
        path: "/leads",
        element: <Leads />,
      },
      {
        path: "/campaigns",
        element: <Campaigns />,
      },
      {
        path: "/nurture",
        element: <Nurture />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/billing",
        element: <Billing />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
