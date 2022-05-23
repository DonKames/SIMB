import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { CardsWarehouse } from "../CardsWarehouse";
import { TablesWarehouse } from "../TablesWarehouse";
import { ModalAddProduct } from './ModalAddProduct';
import { ModalAddProducts } from './ModalAddProducts';
import { TBodyProduct } from './TBodyProduct';
import { TBodyProducts } from './TBodyProducts';

export const MainScreen = () => {

	const tHeadProduct = [
		"ID",
		"Nombre",
		"Categoría",
		"Sub-Categoría",
		"Cantidad",
	];

	const tHeadProducts = [
		"ID",
		"Nombre",
		"Categoría",
		"Sub-Categoría",
		"Cantidad",
	];

	const product = useSelector( state => state.warehouse.product );
	
	
	const products = useSelector( state => state.warehouse.products );


  	return (
      <>
        <Row className="justify-content-md-evenly">
          <Col md="auto">
            <CardsWarehouse
              title="Producto"
              modal={<ModalAddProduct />}
              table={
                <TablesWarehouse
                  tHead={ tHeadProduct }
                  slice={ product }
                  tBody={ <TBodyProduct /> }
                />
              }
            />
          </Col>
          <Col md="auto">
            <CardsWarehouse
              title="Productos"
              modal={<ModalAddProducts />}
              table={
                <TablesWarehouse
                  tHead={ tHeadProducts }
                  slice={ products }
                  tBody={ <TBodyProducts /> }
                />
              }
            />
          </Col>
          <Col xs="auto">
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/600x800/373940"
              alt="First slide"
            />
          </Col>
        </Row>
      </>
    );
}