import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const ControlRouter = ({ isLoggedIn }) => {
    return (
        isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />
    );
};