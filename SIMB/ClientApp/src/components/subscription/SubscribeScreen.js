import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BasicSubscriptionModal } from './BasicSubscriptionModal';

export const SubscribeScreen = () => {

    return (
      <Container className="mt-2 mb-5">
        <h1 className="text-center mb-1">Suscribir</h1>
        <h3 className=''>Modulo Bodegas</h3>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={4}>
            <Card className="mb-3 h-100">
              <Card.Body>
                <Card.Title className="text-center">
                  Plan Básico
                </Card.Title>
                <Card.Img src="https://res.cloudinary.com/cloud-kames/image/upload/v1656463719/SIMB/Plan_1_400x600_awfkjn.png" />
                <Card.Body className='mb-3'>
                <ul>
                    <li>
                    -Podrás hacer uso de una sola bodega.
                    </li>
                  </ul>
                  <ul>
                    <li>
                    -Ingresar productos con información básica
                    </li>
                  </ul>
                  <ul>
                    <li>
                    -Solo un usuario tiene acceso.
                    </li>
                  </ul>
                </Card.Body>
                <div className="text-end mt-auto">
                  {/* <Link to="/pvt/modules">
                    <Button variant="primary">Suscribir</Button>
                  </Link> */}
                </div>
              </Card.Body>
              <Card.Footer className="text-center">
              <BasicSubscriptionModal className=""/>
            </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={8} lg={4}>
            <Card className="mb-3 h-100">
              <Card.Body>
                <Card.Title className="text-center">
                  Plan Medio
                </Card.Title>
                <Card.Img src="https://res.cloudinary.com/cloud-kames/image/upload/v1656463719/SIMB/Plan_2_400x600_ojqtvr.png" />
                <Card.Body className='mb-3'>
                <ul>
                    <li>
                -Podrás administrar hasta 2 bodegas en linea

                    </li>
                  </ul>
                  <ul>
                    <li>
-Administrar productos con más detalles.
                    </li>
                  </ul>
                  <ul>
                    <li>
-Acceso de dos usuarios (administrador y bodeguero)
                    </li>
                  </ul>
                </Card.Body>
              </Card.Body>
              <Card.Footer className="text-center">
                  <Link to="/pvt/modules">
                    <Button variant="primary">Suscribir</Button>
                  </Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={8} lg={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="text-center">
                  Plan Avanzado
                </Card.Title>
                <Card.Img src="https://res.cloudinary.com/cloud-kames/image/upload/v1656463719/SIMB/Plan_3_400x600_nc8zcc.png" />
                <Card.Body>
                  <ul>
                    <li>
                      Incluye plan medio, sumando que puedes administrar dos o más bodegas en linea.
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Podrás crear y asignar nuevos usuarios para administrarlo.
                    </li>
                  </ul>
                </Card.Body>
              </Card.Body>
              <Card.Footer className="text-center">
                  <Link to="/pvt/modules">
                    <Button variant="primary">Suscribir</Button>
                  </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}