import { Col, Container, Row } from "react-bootstrap"
import { ModalAddPlan } from "./ModalAddPlan"


export const ConfigurationScreen = () => {
  return (
    <>
		<h1>ConfigurationScreen</h1>
      	<Container>
			<Row>
				<Col md="2">
      				<ModalAddPlan />
				</Col>
				<Col md="2"></Col>
				<Col md="2"></Col>
				<Col md="2"></Col>
				<Col md="2"></Col>
				<Col md="2"></Col>
			</Row>
      	</Container>
    </>
  )
}