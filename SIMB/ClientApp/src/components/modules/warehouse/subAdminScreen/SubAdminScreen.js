import { Col, Row } from "react-bootstrap";
import { CardsWarehouse } from "../CardsWarehouse";
import { TablesWarehouse } from "../TablesWarehouse";
import { ModalAddCategory } from "./ModalAddCategory";
//import { CardCategories } from "./CardCategories"

export const SubAdminScreen = () => {
  return (
    <Row className="justify-content-md-evenly">
        <Col md="auto">
            <CardsWarehouse title="Bodegas" modal={<ModalAddCategory />} table={<TablesWarehouse />} />
        </Col>
        <Col md="auto">col2</Col>
    </Row>
  )
}
