import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { AppRouteType } from "../models";
import { Spinner } from "../components/Common";
import BasePage from "../components/Layout/BasePage/BasePage";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Camera = lazy(() => import("../pages/Camera"));
const Warning = lazy(() => import("../pages/Warning"));
const Region = lazy(() => import("../pages/Region"));
const Statistic = lazy(() => import("../pages/Statistic"));

const waitFor = (Tag: React.LazyExoticComponent<() => JSX.Element | null>) => (
  <Suspense fallback={<Spinner />}>
    <Tag />
  </Suspense>
);

export const routes: AppRouteType[] = [
  {
    name: "Login",
    auth: false,
    path: "/login",
    component: Login,
  },
  {
    name: "Home",
    auth: false,
    path: "/home",
    component: Home,
  },
  {
    name: "Camera",
    auth: false,
    path: "/camera",
    component: Camera,
  },
  {
    name: "Warning",
    auth: false,
    path: "/warning",
    component: Warning,
  },
  {
    name: "Region",
    auth: false,
    path: "/region",
    component: Region,
  },
  {
    name: "Statistic",
    auth: false,
    path: "/statistic",
    component: Statistic,
  },
];

export default function RoutesAppRoutes() {
  const publicRoutes = routes
    .filter((route) => !route.auth || route.isPublic)
    .map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={waitFor(route.component)}
      />
    ));

  // return <Routes>{publicRoutes}</Routes>;

  return (
    <BasePage>
      <Routes>{publicRoutes}</Routes>
    </BasePage>
  );
}
