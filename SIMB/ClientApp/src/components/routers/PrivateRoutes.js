import { Navigate } from 'react-router-dom';
import { PrivateRouter } from './PrivateRouter';

export const PrivateRoutes = ({ isLoggedIn }) => {
    return (
        isLoggedIn ? <PrivateRouter /> : <Navigate to="../pbl/login" />
    )
}