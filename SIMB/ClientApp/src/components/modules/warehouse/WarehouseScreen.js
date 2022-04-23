//import { Button } from 'reactstrap';
import { Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { startLogout } from '../../../actions/auth';

export const WarehouseScreen = () => {


    return (
        <>
        <Row>
            <Col>
                <h1>Test Company</h1>
            </Col>
            <Col>
                <Button>Admin Productos</Button>
            </Col>
        </Row>
        </>
    );
}