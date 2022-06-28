import { useState } from "react";
import { Card, Table } from "react-bootstrap"
import { useSelector } from "react-redux";
import { ModalInfoSku } from "./ModalInfoSku";


export const CardSku = () => {

	const skus = useSelector( state => state.warehouse.skus );

	const [checked, setChecked] = useState(false);

	const [idSku, setIdSku] = useState(null);

	const handleClickSku = ( idSku ) => {
		setIdSku(idSku);
		setChecked(true);
		console.log("le di click");
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