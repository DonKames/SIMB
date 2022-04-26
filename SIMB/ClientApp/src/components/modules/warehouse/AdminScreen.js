import { useState } from 'react';
import { Button, Card, Col, Form, Modal, Row, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { startSavingWarehouse } from '../../../actions/modules/warehouse';
import { useForm } from '../../../hooks/useForm';

export const AdminScreen = () => {

  const dispatch = useDispatch();

	const [showAddForm, setShowAddForm] = useState(false);

	const [formValues, handleInputChange, reset] = useForm({
		id: '',
		name: '',
		location: '',
	});

	const { id, name, location } = formValues;
  const warehouse = {
    id,
    name,
    location,
  };

	console.log( formValues);

	const handleSaveWarehouse = (e) => {
		e.preventDefault();
    dispatch(startSavingWarehouse(warehouse));
    reset();
	};

	const handleOpenWarehouseForm = () => {
		setShowAddForm(true);
	};

	const handleCloseWarehouseForm = () => {
		setShowAddForm(false);
	};

  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="align-middle">Bodegas</Card.Title>
              </Col>
              <Col md="auto">
                <Button variant="primary" onClick={handleOpenWarehouseForm}>
                  Agregar
                </Button>
                  <Modal show={showAddForm} onHide={handleCloseWarehouseForm}>
                <Form onSubmit={handleSaveWarehouse}>
                    <Modal.Header closeButton>
                      <Modal.Title>Agregar Bodega</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group>
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="ID"
                          name="id"
                          onChange={handleInputChange}
                          value={id}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nombre"
                          name="name"
                          onChange={handleInputChange}
                          value={name}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Ubicación</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nombre"
                          name="location"
                          onChange={handleInputChange}
                          value={location}
                        />
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="danger"
                        onClick={handleCloseWarehouseForm}
                      >
                        Cancelar
                      </Button>
                      <Button variant="primary" type="submit">
                        Guardar
                      </Button>
                    </Modal.Footer>
                </Form>
                  </Modal>
              </Col>
            </Row>
            <Row>
              <Table>
                <thead>
                  <tr>
                    <th>ID Bodega</th>
                    <th>Nombre</th>
                    <th>Ubicación</th>
                    <th>Bodeguero</th>
                    <th>Deshabilitar</th>
                  </tr>
                </thead>
              </Table>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col>ASDFADF</Col>
    </Row>
  );
};