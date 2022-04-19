import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProfileNavBar = () => {

    const auth = useSelector(state => state.auth);

    if (auth.name) {
        return (
            <>
                <Link to="pvt/subscribe" className="ms-3 me-2">Suscribir</Link>
                <p className="my-auto me-1"> { auth.name[0].toUpperCase() + auth.name.slice(1).toLowerCase() } </p>
                <FontAwesomeIcon icon={faUser} className="my-auto" />
            </>
        );
    }

    return (
        <>
            <Link to="pbl/login" className='link-secondary me-1'>Ingresar</Link>
            <Link to="pbl/register" className='link-secondary'>Registrar</Link>
        </>
    );

}