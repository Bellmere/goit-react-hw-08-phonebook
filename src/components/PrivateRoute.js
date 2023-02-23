import { useAuth } from "hooks/useAuth"
import { Navigate } from "react-router";

export const PrivateRoute = ( {component: Component, redirectTo = '/'} ) => {
    const { issLoggedIn, isRefreshing } = useAuth();

    const shouldRedirect = !isRefreshing && !issLoggedIn;

    return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
}