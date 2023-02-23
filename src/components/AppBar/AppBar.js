import { Navigation } from '../Navigation/Navigation';
import { userAuth } from '../userAuth/useAuth';
import { AuthNav } from '../AuthNav/AuthNav'; 
import css from './AppBar.module.css';

export const AppBar = () => {
    const { isLoggedIn } = userAuth();

    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};