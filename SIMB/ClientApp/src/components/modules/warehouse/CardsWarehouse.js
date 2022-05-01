import { Card, Col, Row } from "react-bootstrap"


export const CardsWarehouse = ( props ) => {
  	return (
    	<Card className="h-100">
      		<Card.Body>
        		<Row>
            		<Col>
                		<Card.Title className="align-middle">{ props.title }</Card.Title>
              		</Col>
          			<Col md="auto">
            			{/* <ModalAddEmployee /> */}
						{ props.modal }
          			</Col>
            	</Row>
            	<Row>
              		{ props.table }
        		</Row>
      		</Card.Body>
        </Card>
  	)
}
