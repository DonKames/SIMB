import { useState } from "react";
import { Button, Card, Col, Container, Form, Row, ToggleButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startUpdatingProductStock } from "../../../../actions/modules/warehouse";
import { useForm } from "../../../../hooks/useForm";
import { CardAddSupply } from "./CardAddSupply";
import { CardRemoveSupply } from "./CardRemoveSupply";
import { ModalAddSku } from "./ModalAddSku";

export const WarehouseKeeperScreen = () => {

	const [checked, setChecked] = useState(true);
	
	
	return (
		<Row className="justify-content-md-evenly">
			<Container>
				<Row>
					<Col>
						<ModalAddSku />
					</Col>
				</Row>
			</Container>
			
			<CardAddSupply checked={checked} setChecked={setChecked} />
			
			<CardRemoveSupply checked={checked} setChecked={setChecked} />
		</Row>
	);
};