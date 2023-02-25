import { Outlet } from "react-router";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { AppBar } from './AppBar/AppBar';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
    return (
        <div style={{ maxWidth: 960, margin: '0, auto', padding: '0 16px' }}>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <ToastContainer position="top-right" reverseOrder={false} />
        </div>
    )
}