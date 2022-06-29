import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ModalLogout } from "./ModalLogout";
import { useState } from "react";

export const ProfileNavBar = () => {

    const auth = useSelector(state => state.auth);

    const [isModalOpen, setIsModalOpen] = useState(false);

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
            {auth.img ? 
            <img src={auth.img} alt="Profile" className="rounded-circle img-fluid" style={{maxHeight: 40}} />
            :
            <FontAwesomeIcon icon={faUser} className="align-self-center" />
            }
            <ModalLogout isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
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