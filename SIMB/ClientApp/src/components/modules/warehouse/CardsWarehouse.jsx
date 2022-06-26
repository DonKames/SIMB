import { Card, Col, Row } from "react-bootstrap"


export const CardsWarehouse = ( { title, modal, table } ) => {
  	return (
    	<Card className="h-100">
      		<Card.Body>
        		<Row>
            		<Col>
                		<Card.Title className="align-middle">{ title }</Card.Title>
              		</Col>
          			<Col md="auto">
						{ modal }
          			</Col>
            	</Row>
            	<Row>
              		{ table }
        		</Row>
      		</Card.Body>
        </Card>
  	)
}
