
import { Col, Row } from 'react-bootstrap';
import { CardEmployees } from './CardEmployees';
import { CardWarehouses } from './CardWarehouses';

export const AdminScreen = () => {

  	return (
		<Row>
	  		<Col>
				<CardWarehouses />
	  		</Col>
	  		<Col>
				<CardEmployees />
	  		</Col>
		</Row>
  	);
};