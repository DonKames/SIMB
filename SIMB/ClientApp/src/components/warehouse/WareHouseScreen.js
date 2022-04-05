import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';

import { startLogout } from '../../actions/auth';

export const WareHouseScreen = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    };


    return (
        <>
            <h1>
                WareHouseScreen
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