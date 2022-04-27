import { useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { startSavingWarehouse } from "../../../../actions/modules/warehouse";
import { useForm } from "../../../../hooks/useForm";
import { ModalAddWarehouse } from "./ModalAddWarehouse";
import { TableWarehouse } from "./TableWarehouses"


export const CardWarehouses = () => {
    return (
    	<>
        	<Card>
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
              			<TableWarehouse />
            		</Row>
          		</Card.Body>
        	</Card>
      	</>
    );
}
