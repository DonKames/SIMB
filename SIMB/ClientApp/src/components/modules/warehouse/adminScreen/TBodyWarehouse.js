import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { startDeletingWarehouse } from "../../../../actions/modules/warehouse";
import { ModalEditWarehouse } from "./ModalEditWarehouse";

export const TBodyWarehouse = () => {

    const dispatch = useDispatch();
    const warehouses = useSelector(state => state.warehouse.warehouses);

    const handleDeleteWarehouse  = (id) => {
        //console.log(id);
        Swal.fire({
          	title: "¿Estas seguro?",
	        text: "Una vez eliminado, no podrás recuperarlo",
    	    icon: "warning",
            iconColor: "#f44336",
        	showCancelButton: true,
          	confirmButtonColor: "#3085d6",
          	cancelButtonColor: "#d33",
          	confirmButtonText: "Si, Eliminar",
          	cancelButtonText: "Cancelar",
        }).then((result) => {
          	if (result.value) {
            	dispatch(startDeletingWarehouse(id));
          	}
        });
	};


    return (
        <tbody>
            {warehouses.map(warehouse => (
                
                <tr key={warehouse.id}>
                    <td className="align-middle">{warehouse.name}</td>
                    <td className="align-middle">{warehouse.location}</td>
                    <td className="align-middle">{ warehouse.status === "disabled" ? "deshabilitada" : "habilitada" }</td>
                    <td className="align-middle text-end" style={{minWidth: "90px"}}>
						<ModalEditWarehouse warehouseId={warehouse.id} />
                        <Button size="sm" variant="danger" className="ms-1" onClick={() => handleDeleteWarehouse(warehouse.id)}>X</Button>
                    </td>
                </tr>

            ))}
        </tbody>
    );
};
