import { useState } from "react";
import { Button, Card, Col, Container, Form, Row, ToggleButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startUpdatingProductStock } from "../../../../actions/modules/warehouse";
import { useForm } from "../../../../hooks/useForm";
import { ModalAddSku } from "./ModalAddSku";

export const WarehouseKeeperScreen = () => {

	const dispatch = useDispatch();

	const [checked, setChecked] = useState(true);

	const categories = useSelector((state) => state.warehouse?.categories);
	const subCategories = useSelector((state) => state.warehouse?.subCategories);
	
	const initialSelectedSkuState = {
		brand: "",
		category: "",
		description: "",
		format:	"",
		id: "",
		model: "",
		name: "",
		price: "",
		quantity: "0",
		sku: "",
		stock: "",
		subCategory: "",
		type: "",
		unit: "",
	};

	const skus = useSelector((state) => state.warehouse?.skus);

	const [selectedSku, setSelectedSku] = useState(initialSelectedSkuState);

	const [ formValues, handleInputChange, reset ] = useForm(selectedSku);

	const { sku, name, category, subCategory, format, unit, type, brand, model, description, price, stock, quantity } = formValues;

	const date = new Date().toLocaleDateString();

	const time = new Date().toLocaleTimeString();

	const handleSkuChange = (e) => {
		handleInputChange(e);
		const skuId = skus.find((sku) => sku.sku === e.target.value);
		skuId.quantity = "0";
		console.log(skuId);
		setSelectedSku({ ...selectedSku, ...skuId, });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(selectedSku);
		dispatch(startUpdatingProductStock( quantity, selectedSku.id ));
	}
	
	console.log(selectedSku);
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
						<Form onSubmit={handleSubmit}>
							<Row>
								<Col>
									<Card.Text>{ "Fecha: " + date + " - Hora: " + time }</Card.Text>
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<Form.Control type="text" placeholder="SKU/Nro Serie" name="sku" list='dlSku' autoComplete="off" onChange={(e) => handleSkuChange(e) } value={sku} disabled={!checked} />
									<datalist id='dlSku'>
										{skus.map((sku) => (
											<option key={sku.id} value={sku.sku} />
										))}
									</datalist>
								</Col>
								<Col>
									<Form.Control type="text" placeholder="Nombre" name="name" list='dlName' autoComplete="off" onChange={handleInputChange} value={ selectedSku ? selectedSku.name : name} disabled={!checked} />
									<datalist id='dlName'>
										{skus.map((sku) => (
											<option key={sku.id} value={sku.name} />
										))}
									</datalist>
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<Form.Control type="text" placeholder="Categoría" name="category" onChange={handleInputChange} value={ selectedSku ? categories.find( category => category.id === selectedSku.category)?.name ?? category : category } disabled={!checked}  />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="Subcategoría" name="subCategory" onChange={handleInputChange} value={ selectedSku ? subCategories.find( subCategory => subCategory.id === selectedSku.subCategory )?.name ?? subCategory : subCategory }  />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<Form.Control type="text" placeholder="Formato" name="format" onChange={handleInputChange} value={ selectedSku ? selectedSku.format : format } disabled={!checked}  />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="Unidades" name="unit" onChange={handleInputChange} value={ selectedSku ? selectedSku.unit === "N/A" ? "N/A" : unit : unit }  disabled={!checked} />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="Tipo" name="type" onChange={handleInputChange} value={ selectedSku ? selectedSku.type : type } disabled={!checked}  />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<Form.Control type="text" placeholder="Marca" name="brand" onChange={handleInputChange} value={ selectedSku ? selectedSku.brand : brand } disabled={!checked}  />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="Modelo" name="model" onChange={handleInputChange} value={ selectedSku ? selectedSku.model : model } disabled={!checked}  />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<Form.Control type="number" placeholder="Cantidad" name="quantity" onChange={handleInputChange} value={ quantity ?? "0" } disabled={!checked} />
								</Col>
							</Row>
							<Row>
								<Col>
									<Button disabled={!checked} type='submit'>Ingresar</Button>
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