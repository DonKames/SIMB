import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CardsWarehouse } from "../CardsWarehouse";
import { TablesWarehouse } from "../TablesWarehouse";
import { ModalAddCategory } from "./ModalAddCategory";
//import { CardCategories } from "./CardCategories"

export const SubAdminScreen = () => {

  const tHeadCategories = [
    "ID",
    "Nombre",
    "Acciones",
  ];

  const categories = useSelector( state => state.warehouse.categories );

  console.log(categories);

  return (
    <Row className="justify-content-md-evenly">
        <Col md="auto">
            <CardsWarehouse title="Bodegas" modal={ <ModalAddCategory /> } table={ <TablesWarehouse tHead={ tHeadCategories } slice={ categories } /> } />
        </Col>
        <Col md="auto">col2</Col>
    </Row>
  )
}
