import { useState } from "react";
import { Button, Card, Col, Form, FormControl, Row, ToggleButton } from "react-bootstrap";

export const WarehouseKeeperScreen = () => {

	const [checked, setChecked] = useState(true);

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
										id="tglAddInsumos"
										type="checkbox"
										variant="outline-primary"
										checked={checked}
										value="1"
										onClick={() => setChecked(true)}
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
									<FormControl type="text" placeholder="SKU/Nro Serie" name="sku" disabled={!checked} />
								</Col>
								<Col>
									<FormControl type="text" placeholder="Nombre" name="name" disabled={!checked} />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="Categoría" name="category" disabled={!checked} />
								</Col>
								<Col>
									<FormControl type="text" placeholder="Subcategoría" name="subCategory" disabled={!checked} />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="Cantidad" name="qty" disabled={!checked} />
								</Col>
								<Col>
									<FormControl type="text" placeholder="Nro Parte" name="parte" disabled={!checked} />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="Folio" name="folio" disabled={!checked} />
								</Col>
								<Col>
									<FormControl type="text" placeholder="LOTE" name="lote" disabled={!checked} />
								</Col>
							</Row>
							<Row>
								<Col>
									<Button disabled={!checked}>Ingresar</Button>
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
										id="tglRemoveInsumos"
										type="checkbox"
										variant="outline-primary"
										checked={!checked}
										value="1"
										onClick={() => setChecked(false)}
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
									<FormControl type="text" placeholder="ID" name="id" disabled={checked} />
								</Col>
								<Col>
									<FormControl type="text" placeholder="Nombre" name="name" disabled={checked} />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="Categoría" name="category" disabled={checked} />
								</Col>
								<Col>
									<FormControl type="text" placeholder="Subcategoría" name="subCategory" disabled={checked} />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="Cantidad" name="qty" disabled={checked} />
								</Col>
								<Col>
									<FormControl type="text" placeholder="Algo falta aquí" name="???" disabled={checked} />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<FormControl type="text" placeholder="Folio" name="folio" disabled={checked} />
								</Col>
								<Col>
									<FormControl type="text" placeholder="LOTE" name="lote" disabled={checked} />
								</Col>
							</Row>
							<Row>
								<Col>
									<Button disabled={checked}>Ingresar</Button>
								</Col>
							</Row>
						</Form>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};