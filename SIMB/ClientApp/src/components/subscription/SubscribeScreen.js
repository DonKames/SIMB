import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const SubscribeScreen = () => {

    return (
      <Container className="mt-2">
        <h1 className="text-center mb-1">Suscribir</h1>
        <h3 className=''>Modulo Bodegas</h3>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">
                  Plan Básico
                </Card.Title>
                <Card.Img src="https://res.cloudinary.com/cloud-kames/image/upload/v1656463719/SIMB/Plan_1_400x600_awfkjn.png" />
                <Card.Text className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                  lorem dui. Aenean et ex tempus, lobortis ante non, fringilla.
                </Card.Text>
                <div className="text-end">
                  <Link to="/pvt/modules">
                    <Button variant="primary">Suscribir</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={8} lg={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">
                  Plan Medio
                </Card.Title>
                <Card.Img src="https://res.cloudinary.com/cloud-kames/image/upload/v1656463719/SIMB/Plan_2_400x600_ojqtvr.png" />
                <Card.Text className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                  lorem dui. Aenean et ex tempus, lobortis ante non, fringilla.
                </Card.Text>
                <div className="text-end">
                  <Link to="/pvt/modules">
                    <Button variant="primary">Suscribir</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={8} lg={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">
                  Plan Avanzado
                </Card.Title>
                <Card.Img src="https://res.cloudinary.com/cloud-kames/image/upload/v1656463719/SIMB/Plan_3_400x600_nc8zcc.png" />
                <Card.Text className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                  lorem dui. Aenean et ex tempus, lobortis ante non, fringilla.
                </Card.Text>
                <div className="text-end">
                  <Link to="/pvt/modules">
                    <Button variant="primary">Suscribir</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}