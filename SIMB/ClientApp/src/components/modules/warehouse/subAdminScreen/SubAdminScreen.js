import { Col, Row } from "react-bootstrap"
import { CardCategories } from "./CardCategories"

export const SubAdminScreen = () => {
  return (
    <Row className="justify-content-md-evenly">
        <Col md="auto">
            <CardCategories />
        </Col>
        <Col md="auto">col2</Col>
    </Row>
  )
}
