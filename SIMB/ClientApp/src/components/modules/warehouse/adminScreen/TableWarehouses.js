import { Table } from 'react-bootstrap';
import { TBodyWarehouse } from './TBodyWarehouse';

export const TableWarehouse = () => {
    return (
      	<Table>
        	<thead>
          		<tr>
            		<th>ID</th>
            		<th>Nombre</th>
            		<th>Ubicación</th>
            		<th>Bodeguero</th>
            		<th>Deshabilitar</th>
          		</tr>
        	</thead>
        	<TBodyWarehouse />
      	</Table>
    );
}
