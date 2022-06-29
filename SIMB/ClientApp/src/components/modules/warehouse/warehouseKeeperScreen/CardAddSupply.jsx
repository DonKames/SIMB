import { useState } from 'react';
import { Col, Row, Card, ToggleButton, Form, Button, FloatingLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { startUpdatingProductStock } from '../../../../actions/modules/warehouse';
import { useForm } from '../../../../hooks/useForm';

export const CardAddSupply = ({ checked, setChecked }) => {

	const dispatch = useDispatch();

	const categories = useSelector( state => state.warehouse?.categories );
	const subCategories = useSelector( state => state.warehouse?.subCategories );
	const skus = useSelector( state => state.warehouse?.skus );
	const { employeeUid, name:employeeName } = useSelector( state => state.warehouse );

	const initialState = {
		brand: "",
		category: "",
		description: "",
		format:	"",
		id: "",
		model: "",
		name: "",
		price: "",
		quantity: "",
		sku: "",
		stock: "",
		subCategory: "",
		type: "",
		unit: "",
	};

	const [ formValues, handleInputChange, reset ] = useForm( initialState );

	const { brand, category, description, format, model, name, price, quantity, sku, stock, subCategory, type, unit } = formValues;

	const [selectedSku, setSelectedSku] = useState(initialState);

	const date = new Date().toLocaleDateString();

	const time = new Date().toLocaleTimeString();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(selectedSku);
		dispatch(startUpdatingProductStock( quantity, selectedSku.id, selectedSku.name,  ));
		setSelectedSku(initialState);
		reset();
	}

	const handleSkuChange = (e) => {
		handleInputChange(e);
		try{
			const sku = skus.find((sku) => sku.sku === e.target.value);
			if( sku !== undefined){
				sku.quantity = "0";
				console.log(sku);
				setSelectedSku({ ...selectedSku, ...sku, });
			}
		} catch(err){
			console.log(err);
		}
	};


  return (
    <>
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
								<FloatingLabel label='SKU / Nro Parte'>
									<Form.Control type="text" placeholder="SKU/Nro Serie" name="sku" list='dlSku' autoComplete="off" onChange={(e) => handleSkuChange(e) } value={sku} disabled={!checked} required />
									<datalist id='dlSku'>
										{skus.map((sku) => (
											<option key={sku.id} value={sku.sku} />
										))}
									</datalist>
								</FloatingLabel>
							</Col>
							<Col>
								<FloatingLabel label='Nombre'>
								<Form.Control type="text" placeholder="Nombre" name="name" list='dlName' autoComplete="off" onChange={handleInputChange} value={ selectedSku ? selectedSku.name : name} disabled={!checked} required />
								<datalist id='dlName'>
									{skus.map((sku) => (
										<option key={sku.id} value={sku.name} />
									))}
								</datalist>
								</FloatingLabel>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col>
								<FloatingLabel label='Categoría'>
									<Form.Control type="text" placeholder="Categoría" name="category" onChange={handleInputChange} value={ selectedSku ? categories.find( category => category.id === selectedSku.category)?.name ?? category : category } disabled={!checked} readOnly />
								</FloatingLabel>
							</Col>
							<Col>
								<FloatingLabel label='Sub Categoría'>
									<Form.Control type="text" placeholder="Subcategoría" name="subCategory" onChange={handleInputChange} value={ selectedSku ? subCategories.find( subCategory => subCategory.id === selectedSku.subCategory )?.name ?? subCategory : subCategory } readOnly />
								</FloatingLabel>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col>
								<FloatingLabel label='Formato'>
									<Form.Control type="text" placeholder="Formato" name="format" onChange={handleInputChange} value={ selectedSku ? selectedSku.format : format } disabled={!checked} readOnly />
								</FloatingLabel>
							</Col>
							<Col>
								<FloatingLabel label='Unidad'>
									<Form.Control type="text" placeholder="Unidades" name="unit" onChange={handleInputChange} value={ selectedSku ? selectedSku.unit === "N/A" ? "N/A" : unit : unit }  disabled={!checked} readOnly />
								</FloatingLabel>
							</Col>
							<Col>
								<FloatingLabel label='Tipo'>
									<Form.Control type="text" placeholder="Tipo" name="type" onChange={handleInputChange} value={ selectedSku ? selectedSku.type : type } disabled={!checked} readOnly />
								</FloatingLabel>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col>
								<FloatingLabel label='Marca'>
									<Form.Control type="text" placeholder="Marca" name="brand" onChange={handleInputChange} value={ selectedSku ? selectedSku.brand : brand } disabled={!checked} readOnly />
								</FloatingLabel>
							</Col>
							<Col>
								<FloatingLabel label='Modelo'>
									<Form.Control type="text" placeholder="Modelo" name="model" onChange={handleInputChange} value={ selectedSku ? selectedSku.model : model } disabled={!checked} readOnly />
								</FloatingLabel>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col>
								<FloatingLabel label='Stock'>
									<Form.Control type="number" placeholder="Stock" name="stock" onChange={handleInputChange} value={ selectedSku ? selectedSku.stock : stock } disabled={!checked} readOnly />
								</FloatingLabel>
							</Col>
							<Col>
								<FloatingLabel label='Cantidad'>
									<Form.Control type="number" placeholder="Cantidad" name="quantity" variant="success" onChange={handleInputChange} value={ quantity ?? "0" } disabled={!checked} required />
								</FloatingLabel>
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
    </>
  )
}
