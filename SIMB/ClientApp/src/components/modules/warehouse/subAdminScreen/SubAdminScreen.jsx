import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CardsWarehouse } from "../CardsWarehouse.jsx";
import { TablesWarehouse } from "../TablesWarehouse.jsx";
import { TBodiesWarehouse } from "../TBodiesWarehouse.jsx";
import { TBodySubCategories } from "./TBodySubCategories.jsx";
import { ModalAddCategory } from "./ModalAddCategory.jsx";
import { ModalAddSubCategory } from "./ModalAddSubCategory.jsx";
//import { CardCategories } from "./CardCategories"

export const SubAdminScreen = () => {

	const tHeadCategories = [
		"Nombre",
		"",
	];

	const tHeadSubCategories = [
		"Nombre",
		"",
	];

	const categories = useSelector( state => state.warehouse.categories );

	const subCategories = useSelector( state => state.warehouse.subCategories );

	//console.log( categories );

	return (
    <Row className="justify-content-md-evenly">
      <Col sm="12" md="5" className="">
        <CardsWarehouse
          title="Categorías"
          modal={<ModalAddCategory />}
          table={<TablesWarehouse tHead={ tHeadCategories } tBody={<TBodiesWarehouse slice={ categories } />} />}
        />
      </Col>
      <Col sm="12" md="5">
        <CardsWarehouse
          title="Sub-Categorías"
          modal={<ModalAddSubCategory />}
          table={<TablesWarehouse tHead={ tHeadSubCategories } tBody={<TBodySubCategories slice={ subCategories } />} />}
        />
      </Col>
    </Row>
  );
}
