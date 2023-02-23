import { useAuth } from "hooks/useAuth"
import { Navigate } from "react-router";

export const RestrictedRoute = ( {component: Component, redirectTo = '/'} ) => {
    const { issLoggedIn } = useAuth();

    return issLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}