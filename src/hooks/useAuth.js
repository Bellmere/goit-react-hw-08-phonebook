import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from "Redux/auth/selectors";

export const useAuth = () => {
    return {
        issLoggedIn: useSelector(selectIsLoggedIn),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser),
    };
};