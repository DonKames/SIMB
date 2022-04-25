//import { Button } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { startLogout } from '../../../actions/auth';

export const LogoutScreen = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    };


    return (
        <>
            <h1>
                LogoutScreen
            </h1>
            <Button
                color='primary'
                onClick={handleLogout}
            >
                Cerrar Sesión
            </Button>
        </>
    );
}