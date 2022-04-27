import { Table } from 'react-bootstrap';
import { TBodyEmployees } from './TBodyEmployees';

export const TableEmployees = () => {
    return (
        <Table>
        <thead>
          <tr>
            <th>RUT</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Deshabilitar</th>
          </tr>
        </thead>
        <TBodyEmployees />
      </Table>
    )
}
