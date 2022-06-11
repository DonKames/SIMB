import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProfileNavBar = () => {

    const auth = useSelector(state => state.auth);

    console.log(auth);
    if (auth.name) {
        return (
          <>
            <Link to="pvt/subscribe" className="nav-link  ms-3 me-2">
              Suscribir
            </Link>
            <p className="my-auto me-2">
              {auth.name[0].toUpperCase() + auth.name.slice(1).toLowerCase()}{" "}
            </p>
            
            <FontAwesomeIcon icon={faUser} className="align-self-center" />
            <img href={auth.photoURL}></img>
          </>
        );
    }

    return (
        <>
            <Link to="pbl/login" className='nav-link me-1'>Ingresar</Link>
            <Link to="pbl/register" className='nav-link'>Registrar</Link>
        </>
    );

}