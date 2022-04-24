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
                            <th>
                                #
                            </th>
                            <th>
                                #
                            </th>
                            <th>
                                #
                            </th>
                            <th>
                                #
                            </th>
                        </tr>
                    </thead>
                </Table>
            </Col>
            <Col>
                ASDF2
            </Col>
            <Col xs="auto">La COL para la imagen</Col>
        </Row>
      </>
    );
}