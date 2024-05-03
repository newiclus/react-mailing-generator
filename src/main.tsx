import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ConfigProvider from "antd/lib/config-provider";

import "@/index.css";
import LocalTheme from "@/styles/theme";
import Root from "@/ui/root";
import Dashboard from "@/features/dashboard/page";
import ErrorPage from "@/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={LocalTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
);
