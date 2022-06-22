import { Card, Col, Row } from "react-bootstrap";
import { ModalAddWarehouse } from "./ModalAddWarehouse";
import { TableWarehouses } from "./TableWarehouses.jsx";


export const CardWarehouses = () => {
    return (
    	<>
        	<Card className="h-100">
          		<Card.Body>
            		<Row>
              			<Col>
                			<Card.Title className="align-middle">Bodegas</Card.Title>
              			</Col>
              			<Col md="auto">
                			<ModalAddWarehouse />
              			</Col>
            		</Row>
            		<Row>
              			<TableWarehouses />
            		</Row>
          		</Card.Body>
        	</Card>
      	</>
    );
}
