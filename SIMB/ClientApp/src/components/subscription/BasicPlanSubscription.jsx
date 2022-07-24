import { Container, Row, Col, Card } from 'react-bootstrap';

export const BasicPlanSubscription = () => {
  return (
    <>
        <Container>
            <Row className='justify-content-center mt-3' >
                <Col sm="12" md="6">
                    <Card>
                        <Card.Body>
                            <Card.Title>Plan Básico</Card.Title>
                            <Card.Text>
                                <p>
                                    <strong>Descripción:</strong> Plan Básico - 1 mes
                                </p>
                                <p>
                                    <strong>Valor:</strong> 8000
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}
