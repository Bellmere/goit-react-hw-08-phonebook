import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/operations';
import css from './userMenu.module.css';

export const userMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogOut = () => dispatch(logOut());

    return (
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, {user.name}</p>
            <button className={css.logOut} type='button' onClick={handleLogOut}>Logout</button>
        </div>
    );
};