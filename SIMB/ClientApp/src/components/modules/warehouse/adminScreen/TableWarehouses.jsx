import { Table } from 'react-bootstrap';
import { TBodyWarehouse } from './TBodyWarehouse';

export const TableWarehouses = () => {
    return (
      	<Table size="sm">
        	<thead>
          		<tr>
            		<th>Nombre</th>
            		<th>Ubicación</th>
            		<th>Bodeguero</th>
            		<th></th>
          		</tr>
        	</thead>
        	<TBodyWarehouse />
      	</Table>
    );
};