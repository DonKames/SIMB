import { Table } from 'react-bootstrap';
import { TBodyEmployees } from './TBodyEmployees';

export const TableEmployees = () => {
    return (
        <Table size="sm">
        <thead>
          <tr>
            <th>RUT</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th></th>
          </tr>
        </thead>
        <TBodyEmployees />
      </Table>
    )
}
