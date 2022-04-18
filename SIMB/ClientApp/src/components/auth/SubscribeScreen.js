import { Row, Col, Card, Container } from 'react-bootstrap';

export const SubscribeScreen = () => {

    return (
        <Container className="mt-2">
            <h1 className="text-center mb-1">Suscribir</h1>
            <Row>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>El Titulo del Card</Card.Title>
                            <Card.Img variant="top" src="https://via.placeholder.com/800x400/20232a" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>El Titulo del Card</Card.Title>
                            <Card.Img variant="top" src="https://via.placeholder.com/800x400/20232a" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>El Titulo del Card</Card.Title>
                            <Card.Img variant="top" src="https://via.placeholder.com/800x400/20232a" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}