import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const ModulesScreen = () => {

    const moduleName = "warehouse"; //! Podria ser un [] con los modulesNames

    //Recupera el id del MainWarehouse
    const {mainWarehouse} = useSelector((state) => state.warehouse.warehouse);

    //Recupera la lista de warehouses
    const warehouses = useSelector((state) => state.warehouse.warehouses);


  return (
    <>
      <h1 align="center">Módulos</h1>
      <Container>
        <Row>
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Modulo Bodega</Card.Title>
                <Card.Subtitle>{warehouses.find(warehouse => warehouse.id === mainWarehouse)?.name}</Card.Subtitle>
                <Card.Text className='mt-2'>
                  Modulo dedicado a la administración de la bodega.
                </Card.Text>
                {/* <Card.Text>
                  Ademas Falta el Style (solo tiene height) para estandarizar el
                  tamaño de las cards.
                </Card.Text> */}
              </Card.Body>
              <Card.Footer className='text-end'>
                <div className="text-end">
                  <Link to={"/pvt/modules/" + moduleName} className="">
                    <Button
                      variant="primary"
                      // className="position-absolute bottom-0 end-0 mb-3 me-3"
                    >
                      Ingresar
                    </Button>
                  </Link>
                </div>

            </Card.Footer>
            </Card>
          </Col>
          <Col>
            {/* <Card className="h-100">
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
            </Card> */}
          </Col>
          <Col>
            {/* <Card className="h-100">
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
            </Card> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}