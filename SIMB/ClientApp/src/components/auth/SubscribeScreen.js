import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const SubscribeScreen = () => {

    return (
      <Container className="mt-2">
        <h1 className="text-center mb-1">Suscribir</h1>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">
                  El Titulo del Card
                </Card.Title>
                <Card.Img src="https://via.placeholder.com/400x600/20232a" />
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
                  El Titulo del Card
                </Card.Title>
                <Card.Img src="https://via.placeholder.com/400x600/20232a" />
                <Card.Text className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                  lorem dui. Aenean et ex tempus, lobortis ante non, fringilla.
                </Card.Text>
                <div className="text-end">
                  <Button variant="primary">Suscribir</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={8} lg={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">
                  El Titulo del Card
                </Card.Title>
                <Card.Img src="https://via.placeholder.com/400x600/20232a" />
                <Card.Text className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                  lorem dui. Aenean et ex tempus, lobortis ante non, fringilla.
                </Card.Text>
                <div className="text-end">
                  <Button variant="primary">Suscribir</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}