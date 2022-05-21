import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CardsWarehouse } from "../CardsWarehouse";
//import { TablesWarehouse } from "../TablesWarehouse";
//import { ModalAddCategory } from "./ModalAddCategory";
//import { ModalAddSubCategory } from "./ModalAddSubCategory";
//import { CardCategories } from "./CardCategories"

export const WarehouseKeeperScreen = () => {

	const tHeadCategories = [
		"ID",
		"Nombre",
		"Acciones",
	];

	const tHeadSubCategories = [
		"ID",
		"Nombre",
		"Acciones",
	];

	const categories = useSelector( state => state.warehouse.categories );

	const subCategories = useSelector( state => state.warehouse.subCategories );

	console.log( categories );

	return (
    <Row className="justify-content-md-evenly">
      <Col md="auto">
        <CardsWarehouse
          title="Productos"
          // modal={<ModalAddCategory />}
          // table={<TablesWarehouse tHead={ tHeadCategories } slice={ categories } />}
        />
      </Col>
      {/* <Col md="auto">
        <CardsWarehouse
          title="Sub-Categorías"
          modal={<ModalAddSubCategory />}
          table={<TablesWarehouse tHead={ tHeadSubCategories } slice={ subCategories } />}
        />
      </Col> */}
    </Row>
  );
};