import { Card, Col, Row } from 'react-bootstrap';
import { ModalAddCategory } from './ModalAddCategory.jsx';

export const CardCategories = () => {
  return (
    <Card className="h-100">
          		<Card.Body>
            		<Row>
              			<Col>
                			<Card.Title className="align-middle">Categorías</Card.Title>
              			</Col>
              			<Col md="auto">
                			<ModalAddCategory />
              			</Col>
            		</Row>
            		<Row>
              			{/* <TableEmployees /> */}
            		</Row>
          		</Card.Body>
        	</Card>
  )
}