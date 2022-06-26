import { useState } from "react";
import { Button, Card, Col, Container, Form, Row, ToggleButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ModalAddSku } from "./ModalAddSku";

export const WarehouseKeeperScreen = () => {

	const [checked, setChecked] = useState(true);

	const categories = useSelector((state) => state.warehouse?.categories);

	const subCategories = useSelector((state) => state.warehouse?.subCategories);

	const date = new Date().toLocaleDateString();

	const time = new Date().toLocaleTimeString();
	
	console.log( date );

	return (
		<Row className="justify-content-md-evenly">
			<Container>
				<Row>
					<Col>
						<ModalAddSku />
					</Col>
				</Row>
			</Container>
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
									<Form.Control type="text" placeholder="SKU/Nro Serie" name="sku" disabled={!checked} />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="Nombre" name="name" disabled={!checked} />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<Form.Select type="text" placeholder="Categoría" name="category" disabled={!checked}>
										<option value="">Seleccione una Categoría</option>
										{categories.map((category) => (
											<option key={category.id} value={category.id}>
												{category.name}
											</option>
										))}
									</Form.Select>
								</Col>
								<Col>
									<Form.Select type="text" placeholder="Subcategoría" name="subCategory" disabled={!checked}>
										<option value="">Seleccione una Subcategoría</option>
										{subCategories.map((subCategory) => (
											<option key={subCategory.id} value={subCategory.id}>
												{subCategory.name}
											</option>
										))}
									</Form.Select>
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<Form.Control type="text" placeholder="Cantidad" name="qty" disabled={!checked} />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="Nro Parte" name="parte" disabled={!checked} />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<Form.Control type="text" placeholder="Folio" name="folio" disabled={!checked} />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="LOTE" name="lote" disabled={!checked} />
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
									<Form.Control type="text" placeholder="ID" name="id" disabled={checked} />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="Nombre" name="name" disabled={checked} />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<Form.Control type="text" placeholder="Categoría" name="category" disabled={checked} />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="Subcategoría" name="subCategory" disabled={checked} />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<Form.Control type="text" placeholder="Cantidad" name="qty" disabled={checked} />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="Algo falta aquí" name="???" disabled={checked} />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<Form.Control type="text" placeholder="Folio" name="folio" disabled={checked} />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="LOTE" name="lote" disabled={checked} />
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