import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { RootState, useAppDispatch } from "./app/store";
import Layout from "./common/Layout";
import ROUTES from "./common/routes";
import Login from "./modules/auth/login";
import ErrorPage from "./modules/errors/ErrorPage";
import { getName } from "./reducers/storages/sessionStorage";
export default function RoutesPage() {
  const dispatch = useAppDispatch();
  const { isAuth } = useSelector((state: RootState) => state.storage);

  useEffect(() => {
    dispatch(getName());
  }, [isAuth]);
  return (
    <Routes>
      <Route element={!isAuth && <Navigate to={ROUTES.AUTH.LOGIN} />} />
      <Route
        path={ROUTES.BASE}
        element={isAuth ? <Layout /> : <Navigate to={ROUTES.AUTH.LOGIN} />}
      />
      <Route
        path={ROUTES.AUTH.LOGIN}
        element={!isAuth ? <Login /> : <Navigate to={ROUTES.BASE} />}
      />
      <Route path={ROUTES.ERROR} element={<ErrorPage />} />
    </Routes>
  );
}
