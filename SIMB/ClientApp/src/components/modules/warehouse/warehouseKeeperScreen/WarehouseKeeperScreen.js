import { useState } from "react";
import { Button, Card, Col, Form, FormControl, Row, ToggleButton } from "react-bootstrap";

export const WarehouseKeeperScreen = () => {

	const [checked, setChecked] = useState(false);

	const date = new Date().toLocaleDateString();

	const time = new Date().toLocaleTimeString();
	
	console.log( date );

	return (
		<Row className="justify-content-md-evenly">
			<Col md="auto">
				<Card>
					<Card.Body>
							<Row>
								<Col>
									<Card.Title>
										Ingresar Insumos
									</Card.Title>
								</Col>
								<Col className="text-end">
									<ToggleButton
										className="mb-2"
										id="toggle-check"
										type="checkbox"
										variant="outline-primary"
										checked={checked}
										value="1"
										onChange={(e) => setChecked(e.currentTarget.checked)}
									>
										Seleccionado
									</ToggleButton>
								</Col>
							</Row>
						<Form>
							<Row>
								<Col>
									<Card.Text>{ "Fecha: " + date + " - Hora: " + time }</Card.Text>
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="ID" name="id" />
								</Col>
								<Col>
									<FormControl type="text" placeholder="Nombre" name="name" />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="Categoría" name="category" />
								</Col>
								<Col>
									<FormControl type="text" placeholder="Subcategoría" name="subCategory" />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="Cantidad" name="qty" />
								</Col>
								<Col>
									<FormControl type="text" placeholder="Algo falta aquí" name="???" />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="Folio" name="folio" />
								</Col>
								<Col>
									<FormControl type="text" placeholder="LOTE" name="lote" />
								</Col>
							</Row>
							<Row>
								<Col>
									<Button>Ingresar</Button>
								</Col>
							</Row>
						</Form>
					</Card.Body>
				</Card>
			</Col>
			<Col md="auto">
				<Card>
					<Card.Body>
							<Row>
								<Col>
									<Card.Title>
										Descontar Insumos
									</Card.Title>
								</Col>
								<Col className="text-end">
									<ToggleButton
										className="mb-2"
										id="toggle-check"
										type="checkbox"
										variant="outline-primary"
										checked={checked}
										value="1"
										onChange={(e) => setChecked(e.currentTarget.checked)}
									>
										Seleccionado
									</ToggleButton>
								</Col>
							</Row>
						<Form>
							<Row>
								<Col>
									<Card.Text>{ "Fecha: " + date + " - Hora: " + time }</Card.Text>
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="ID" name="id" />
								</Col>
								<Col>
									<FormControl type="text" placeholder="Nombre" name="name" />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="Categoría" name="category" />
								</Col>
								<Col>
									<FormControl type="text" placeholder="Subcategoría" name="subCategory" />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="Cantidad" name="qty" />
								</Col>
								<Col>
									<FormControl type="text" placeholder="Algo falta aquí" name="???" />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="Folio" name="folio" />
								</Col>
								<Col>
									<FormControl type="text" placeholder="LOTE" name="lote" />
								</Col>
							</Row>
							<Row>
								<Col>
									<Button>Ingresar</Button>
								</Col>
							</Row>
						</Form>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};