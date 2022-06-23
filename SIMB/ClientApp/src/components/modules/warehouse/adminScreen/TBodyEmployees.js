import { Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import Swal from "sweetalert2";
import { ModalEditEmployee } from './ModalEditEmployee';

export const TBodyEmployees = () => {

	const employees = useSelector(state => state.warehouse.employees);
	
	const handleDeleteEmployee  = (id) => {
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
            	//dispatch(startDeletingWarehouse(id));
          	}
        });
	};


	return (
		<tbody>
			{employees.map(employee => (
				<tr key={employee.id}>
					<td className="align-middle">{employee.rut}</td>
					<td className="align-middle">{employee.name}</td>
					<td className="align-middle">{employee.email}</td>
					<td className="align-middle">{employee.phone}</td>
					<td className="align-middle text-end" style={{minWidth: "90px"}}>
						<ModalEditEmployee employeeId={employee.id} />
                        <Button size="sm" variant="danger" className="ms-1" onClick={() => handleDeleteEmployee(employee.id)}>X</Button></td>
				</tr>
			))}
		</tbody>
	);
};