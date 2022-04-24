import { Button, Row, Col, DropdownButton, Dropdown, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const WarehouseScreen = () => {


    return (
      <>
        <Row className="mt-3">
          <Col>
            <h1>
            TEST COMPANY
            </h1>
          </Col>
          <Col xs="auto">
            <Link to="/">
              <Button>Administrar Productos</Button>
            </Link>
          </Col>
          <Col xs="auto">
            <DropdownButton id="dropdown-basic-button" title="Bodegas">
              <Dropdown.Item active href="#/action-1">Bodega Principal (Activa)</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Bodega secundaria</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Y otra Bodega</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
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