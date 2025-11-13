import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import type { RootState } from '@shui/store';

export const ProtectedRoute = () => {
    const user = useSelector((state : RootState) => state.auth.token)

    if(!user) return <Navigate to="/auth" />

    return <Outlet />
}