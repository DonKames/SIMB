import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ModulesScreen = () => {

    const moduleName = "warehouse"; //! Podria ser un [] con los modulesNames

  return (
    <>
      <h1 align="center">ModulesScreen</h1>
      <Container>
        <Row>
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Modulo Bodega</Card.Title>
                <Card.Subtitle>Bodega Principal?</Card.Subtitle>
                <Card.Text>
                  Aquí podría ir una estadística de algo, si no una descripción
                  corta del modulo.
                </Card.Text>
                <Card.Text>
                  Ademas Falta el Style (solo tiene height) para estandarizar el
                  tamaño de las cards.
                </Card.Text>
                <div className="text-end">
                  <Link to={"/pvt/modules/" + moduleName} className="">
                    <Button
                      variant="primary"
                      className="position-absolute bottom-0 end-0 mb-3 me-3"
                    >
                      Ingresar
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>
                  Modulo (Nombre de algún otro modulo que hagamos ah.-)
                </Card.Title>
                <Card.Subtitle>Bodega Principal?</Card.Subtitle>
                <Card.Text>
                  Aquí podría ir una estadística de algo, si no una descripción
                  corta del modulo.
                </Card.Text>
                <Card.Text>
                  Ademas Falta el Style (solo tiene height) para estandarizar el
                  tamaño de las cards.
                </Card.Text>
                <div className="text-end mb-5">
                  <Link to={"/pvt/modules/" + moduleName}>
                    <Button
                      variant="primary"
                      className="position-absolute bottom-0 end-0 mb-3 me-3"
                    >
                      Ingresar
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Agregar Modulo +</Card.Title>
                <Card.Subtitle>Bodega Principal?</Card.Subtitle>
                <Card.Text>
                  Aquí podría ir una estadística de algo, si no una descripción
                  corta del modulo.
                </Card.Text>
                <Card.Text>
                  Ademas Falta el Style (solo tiene height) para estandarizar el
                  tamaño de las cards.
                </Card.Text>
                <div className="text-end">
                  <Link to={"/pvt/modules/" + moduleName}>
                    <Button
                      variant="primary"
                      className="position-absolute bottom-0 end-0 mb-3 me-3"
                    >
                      Ingresar
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}