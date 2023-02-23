import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/operations';
import css from './userMenu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogOut = () => dispatch(logOut());

    return (
        <div className={css.wrapper}>
            <p className={css.username}>{user.name}</p>
            <button className={css.logOut} type='button' onClick={handleLogOut}>Logout</button>
        </div>
    );
};