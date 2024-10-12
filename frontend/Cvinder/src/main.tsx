import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import { LoginForm, PersonalInfo, RegisterForm, Users } from "./components/index.ts";

import { RootLayout, LogInLayout, TablesLayout, RegisterLayout } from "../src/layouts/index.ts";

import "./index.css";
import "./reset.css";
import AuthProvider from "./utils/AuthProvider.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LogInLayout />,
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterLayout />,
    children: [
      {
        index: true,
        element: <RegisterForm />,
      },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: "",
        // element: <Navigate to="/login" replace={true} />,
      },
      // {
      //   path: 'clients',
      //   element: '',
      // },
      // {
      //   path: 'calculator',
      //   element: <App />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
