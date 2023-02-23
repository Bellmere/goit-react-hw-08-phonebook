import { Layout } from "components/Layout";
import { lazy } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from "Redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { Loader } from "./Loader/Loader";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


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
          <Route index element={<HomePage />}></Route>
          <Route 
          path="/register" 
          element={<RestrictedRoute component={RegisterPage} redirectTo='/contacts' />}
          >
          </Route>
          <Route 
          path="/login" 
          element={<RestrictedRoute component={LoginPage} redirectTo='/contacts' />}
          >
          </Route>
          <Route 
          path="/contacts" 
          element={<PrivateRoute component={ContactsPage} redirectTo='/login' />}
          >
          </Route>
      </Route>
    </Routes>
    );
};