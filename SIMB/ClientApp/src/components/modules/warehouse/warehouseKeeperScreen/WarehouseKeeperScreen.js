import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CardsWarehouse } from "../CardsWarehouse";
//import { TablesWarehouse } from "../TablesWarehouse";
//import { ModalAddCategory } from "./ModalAddCategory";
//import { ModalAddSubCategory } from "./ModalAddSubCategory";
//import { CardCategories } from "./CardCategories"

export const WarehouseKeeperScreen = () => {

	const tHeadProduct = [
		"Nombre",
    "Categoría",
    "Subcategoría",
    "Precio",
    "Stock",
    "Acciones"
	];

	const tHeadProducts = [
		"ID",
		"Nombre",
		"Acciones",
	];

	const product = useSelector( state => state.warehouse.product );

	const products = useSelector( state => state.warehouse.products );

	console.log( product );

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