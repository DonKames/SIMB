import { useState } from "react";
import { Col, Container, Row, } from "react-bootstrap";
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