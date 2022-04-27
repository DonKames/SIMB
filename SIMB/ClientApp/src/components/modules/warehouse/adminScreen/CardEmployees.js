import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { ModalAddEmployee } from './ModalAddEmployee';
import { TableEmployees } from './TableEmployees';

export const CardEmployees = () => {
    return (
        <>
        	<Card className="h-100">
          		<Card.Body>
            		<Row>
              			<Col>
                			<Card.Title className="align-middle">Bodegas</Card.Title>
              			</Col>
              			<Col md="auto">
                			<ModalAddEmployee />
              			</Col>
            		</Row>
            		<Row>
              			<TableEmployees />
            		</Row>
          		</Card.Body>
        	</Card>
      	</>
    );
};