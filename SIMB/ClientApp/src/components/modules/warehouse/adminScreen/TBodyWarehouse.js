import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { startDeletingWarehouse } from "../../../../actions/modules/warehouse";

export const TBodyWarehouse = () => {
    const dispatch = useDispatch();
    const warehouses = useSelector(state => state.warehouse.warehouses);

    const handleDeleteWarehouse  = (id) => {
        console.log(id);
        Swal.fire({
          	title: "¿Estas seguro?",
	        text: "Una vez eliminado, no podrás recuperarlo",
    	    icon: "warning",
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
                    <td className="align-middle">
                        <Form.Control></Form.Control>
                        {/* {warehouse.warehousekeeper ? warehouse.warehousekeeper : "Sin asignar" } */}
                    </td>
                    <td className="align-middle text-end" style={{minWidth: "90px"}}>
                        <Button size="sm" variant="success">E</Button>
                        <Button size="sm" variant="primary">-</Button>
                        <Button size="sm" variant="danger" onClick={() => handleDeleteWarehouse(warehouse.id)}>X</Button>
                    </td>
                </tr>

            ))}
        </tbody>
    );
};
