import { useState } from "react";
import { Card, Table, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { loadSku, startLoadingSku } from "../../../../actions/modules/warehouse";
import { useForm } from "../../../../hooks/useForm";
import { ModalInfoSku } from "./ModalInfoSku";


export const CardSku = () => {

	const dispatch = useDispatch();

	const warehouseId = useSelector(state => state.warehouse.warehouse.activeWarehouse);

	let skus = useSelector( state => state.warehouse.skus );

	const [checked, setChecked] = useState(false);

	const [idSku, setIdSku] = useState(null);

	const [valueForm, handleInputChange, reset] = useForm({
		sku: "",
		name: "",
	})

	const { sku, name } = valueForm;

	const handleClickSku = ( idSku ) => {
		setIdSku(idSku);
		setChecked(true);
		console.log("le di click");
	}

	const handleFilterSku = () => {
		if(sku){
			skus = skus.filter(psku => psku.sku === sku);
			dispatch(loadSku(skus));
		}
		if(name){
			skus = skus.filter(sku => sku.name === name);
			dispatch(loadSku(skus));
		}
	}

	const handleResetSkuFilter = () => {
		dispatch(startLoadingSku(warehouseId));
		reset();
	}
	
	return (
		<>
		<ModalInfoSku checked={checked} setChecked={setChecked} idSku={idSku} />
	  <Card className="h-100">
	    <Card.Header>
	      <Card.Title>Skus</Card.Title>
	    </Card.Header>
	    <Card.Body>
	      <Table hover striped responsive>
			<thead>
				<tr>
					<th>
						<Form.Control type="text" placeholder="Buscar" list="skus" name="sku" value={sku} onChange={handleInputChange} style={{maxWidth:'200px'}} />
						<datalist id="skus">
							{
								skus.map( ( sku, index ) => (
									<option key={index} value={sku.sku} />
								))
							}
						</datalist>
					</th>
					<th>
						<Form.Control type="text" placeholder="Buscar" list="names" name="name" value={name} onChange={handleInputChange} style={{maxWidth:'200px'}} />
						<datalist id="names">
							{
								skus.map( ( sku, index ) => (
									<option key={index} value={sku.name} />
								))
							}
						</datalist>
					</th>
					<th className='text-end'>
                        <Button className="btn btn-info" onClick={handleFilterSku}>Buscar</Button>
                        <Button className="ms-2 btn btn-warning" onClick={handleResetSkuFilter}>Limpiar</Button>
                    </th>
				</tr>
				<tr>
					<th>SKU</th>
					<th>Nombre</th>
					<th>Stock</th>
				</tr>
			</thead>
			<tbody>
			{
				skus.map( ( sku, index ) => (
					<tr key={index} onClick={() => handleClickSku(sku.id)} style={{cursor: 'pointer'}}>
						<td>{ sku.sku }</td>
						<td>{ sku.name }</td>
						<td>{ sku.stock ? sku.stock : '0' }</td>
					</tr>
				))
			}
			</tbody>
		  </Table>
	    </Card.Body>
	  </Card>
    </>
  )
}