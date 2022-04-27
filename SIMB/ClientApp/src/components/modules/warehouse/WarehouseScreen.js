import { Row, Col, Table } from 'react-bootstrap';

export const WarehouseScreen = () => {
  	return (
	  <>
		<Row>
		  <Col>
			<Table responsive>
			  <thead>
				<tr>
				  <th>ID Producto</th>
				  <th>Nombre Producto</th>
				  <th>Categoría</th>
				  <th>SubCategoría</th>
				  <th>Cant</th>
				</tr>
			  </thead>
			  <tbody>
				<tr>
				  <td>123</td>
				  <td>Televisor Samsung 49"</td>
				  <td>Electrodomésticos</td>
				  <td>Televisores</td>
				  <td>20</td>
				</tr>
			  </tbody>
			</Table>
		  </Col>
		  <Col>
			<Table responsive>
			  <thead>
				<tr>
				  <th>Folio</th>
				  <th>Nombre Producto</th>
				  <th>Categoría</th>
				  <th>SubCategoría</th>
				  <th>Cant</th>
				</tr>
			  </thead>
			  <tbody>
				<tr>
				  <td>123</td>
				  <td>Televisor Samsung 49"</td>
				  <td>Electrodomésticos</td>
				  <td>Televisores</td>
				  <td>20</td>
				</tr>
			  </tbody>
			</Table>
		  </Col>
		  <Col xs="auto">La COL para la imagen</Col>
		</Row>
	  </>
	);
}