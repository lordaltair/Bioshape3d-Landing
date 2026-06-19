import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./components/layout/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import "./styles.css";

const Services = lazy(() => import("./pages/Services.jsx"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail.jsx"));
const Technologies = lazy(() => import("./pages/Technologies.jsx"));
const Sectors = lazy(() => import("./pages/Sectors.jsx"));
const News = lazy(() => import("./pages/News.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const Loading = () => (
  <div className="min-h-screen bg-spring-ink text-white grid place-items-center">
    در حال بارگذاری...
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "services",
        element: (
          <Suspense fallback={<Loading />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "services/:slug",
        element: (
          <Suspense fallback={<Loading />}>
            <ServiceDetail />
          </Suspense>
        ),
      },
      {
        path: "security-services",
        element: (
          <Suspense fallback={<Loading />}>
            <ServiceDetail forcedSlug="security-services" />
          </Suspense>
        ),
      },
      {
        path: "web-hosting",
        element: (
          <Suspense fallback={<Loading />}>
            <ServiceDetail forcedSlug="web-hosting" />
          </Suspense>
        ),
      },
      {
        path: "corporate-networks",
        element: (
          <Suspense fallback={<Loading />}>
            <ServiceDetail forcedSlug="corporate-networks" />
          </Suspense>
        ),
      },
      {
        path: "technologies",
        element: (
          <Suspense fallback={<Loading />}>
            <Technologies />
          </Suspense>
        ),
      },
      {
        path: "sectors",
        element: (
          <Suspense fallback={<Loading />}>
            <Sectors />
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<Loading />}>
            <News />
          </Suspense>
        ),
      },
      { path: "news", element: <Navigate to="/blog" replace /> },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
