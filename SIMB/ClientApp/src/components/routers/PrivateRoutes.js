import { Navigate } from 'react-router-dom';
import { WareHouseScreen } from '../warehouse/WareHouseScreen';

export const PrivateRoutes = ({ isLoggedIn }) => {
    return (
        isLoggedIn ? <WareHouseScreen /> : <Navigate to="auth/login" />
    )
}