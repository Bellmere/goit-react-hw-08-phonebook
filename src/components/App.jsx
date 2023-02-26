import React from "react";
import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { Layout } from "components/Layout";
import { refreshUser } from "Redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { Loader } from "./Loader/Loader";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import("./NotFound/NotFound"));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route 
              path="register"
              element={<RestrictedRoute component={<RegisterPage />} redirectTo='/contacts' />}
            />
            <Route 
              path="login" 
              element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />}
            />
            <Route 
              path="contacts" 
              element={<PrivateRoute component={<ContactsPage />} redirectTo='/login' />}
            />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
    );
};