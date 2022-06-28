import { Row, Col } from 'react-bootstrap';

import { CardSupplyHistory } from './CardSupplyHistory.jsx';
import { CardSku } from './CardSku.jsx';

export const MainScreen = () => {

  	return (
      <>
        <Row className="justify-content-md-evenly">
          <Col md="6" className='mb-3'>
            <CardSupplyHistory />
            {/* <CardsWarehouse
              title="Producto"
              modal={<ModalAddProduct />}
              table={
                <TablesWarehouse
                  tHead={ tHeadProduct }
                  slice={ product }
                  tBody={ <TBodyProduct /> }
                />
              }
            /> */}
          </Col>
          <Col md="6" className='mb-3'>
		  <CardSku />
            {/* <CardsWarehouse
              title="Productos"
              modal={<ModalAddProducts />}
              table={
                <TablesWarehouse
                  tHead={ tHeadProducts }
                  slice={ products }
                  tBody={ <TBodyProducts /> }
                />
              }
            /> */}
          </Col>
          {/* <Col xs="4" className='mb-3'>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/600x800/373940"
              alt="First slide"
            />
          </Col> */}
        </Row>
      </>
    );
}