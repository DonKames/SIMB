import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { CardsWarehouse } from "./CardsWarehouse";
import { TablesWarehouse } from "./TablesWarehouse";

export const WarehouseScreen = () => {

	const tHeadProducts = [
		"ID",
		"Nombre",
		"Categoría",
		"Sub-Categoría",
		"Cantidad",
	];

	const products = useSelector( state => state.warehouse.products );

  	return (
	  <>
		<Row>
		<Col md="auto">
        <CardsWarehouse
          title="Productos"
          // modal={<ModalAddCategory />}
          table={<TablesWarehouse tHead={ tHeadProducts } slice={ products } />}
        />
      </Col>
      {/* <Col md="auto">
        <CardsWarehouse
          title="Sub-Categorías"
          modal={<ModalAddSubCategory />}
          table={<TablesWarehouse tHead={ tHeadSubCategories } slice={ subCategories } />}
        />
      </Col> */}
		  <Col xs="auto">La COL para la imagen</Col>
		</Row>
	  </>
	);
}