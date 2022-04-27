import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

export const TBodyWarehouse = () => {

    const warehouses = useSelector(state => state.warehouse.warehouses);

    return (
        <tbody>
            {warehouses.map(warehouse => (
                
                <tr key={warehouse.id}>
                    <td className="align-middle">{warehouse.idInternal}</td>
                    <td className="align-middle">{warehouse.name}</td>
                    <td className="align-middle">{warehouse.location}</td>
                    <td className="align-middle">
                        <Form.Control></Form.Control>
                        {/* <Button>{warehouse.warehousekeeper ? warehouse.warehousekeeper : "Sin asignar" }</Button> */}
                    </td>
                    <td className="align-middle">{warehouse.disabled ? "Si" : "No"}</td>
                </tr>

            ))}
        </tbody>
    );
};
