import { Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startChangingMainWarehouse } from "../../../../actions/modules/warehouse";


export const ConfigurationScreen = () => {

	const dispatch = useDispatch();

	const { name, img } = useSelector(state => state.auth);

	const  warehouses = useSelector(state => state.warehouse.warehouses);

	const handleSelectMainWarehouse = (e) => {
		dispatch(startChangingMainWarehouse(e));
	}

	console.log( name, img );

	return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>
                    <h1>Configuración</h1>
                  </Card.Title>
                </Col>
                <Col className="text-end">
                  <Image src={img} thumbnail></Image>
                </Col>
              </Row>
              <Form>
			  <Row className="mt-3">
				<Col xs="auto" className="d-flex align-items-center">
                <Card.Text className="align-items-center">Bodega Principal:</Card.Text>
				</Col>
				<Col>
                <Form.Select aria-label="Select Main Warehouse" onChange={e => handleSelectMainWarehouse(e.target.value)}>
                  <option>Elija la Bodega Principal</option>
                  {warehouses.map((warehouse) => (
                    <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
                  ))}
                </Form.Select>
				</Col>
			  </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
