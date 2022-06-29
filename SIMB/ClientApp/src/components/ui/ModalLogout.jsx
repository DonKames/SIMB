import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Modal, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"
import { startLogout } from "../../actions/auth"

export const ModalLogout = ({isModalOpen, setIsModalOpen}) => {

    const dispatch = useDispatch();

    const handleLogoutClick = () => {
        Swal.fire({
            title: "¿Estas seguro?",
            text: "Una vez cerrado, no podrás acceder de nuevo",
            icon: "warning",
            iconColor: "#f44336",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Cerrar Sesión",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.value) {
                dispatch(startLogout());
            }
        })
    }

  return (
    <>
        <FontAwesomeIcon icon={faArrowRightFromBracket} className="ms-2" onClick={handleLogoutClick} style={{cursor:"pointer"}} />
    </>
  )
}
