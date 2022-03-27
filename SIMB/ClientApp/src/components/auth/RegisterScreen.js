import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardTitle, Col, Container, Form, Input } from "reactstrap"

export const RegisterScreen = () => {
    return (
        <Container
            className='vh-100 d-flex justify-content-center align-items-center bg-primary'
            fluid
        >
            <Col className='col-12 col-md-4 col-xxl-2'>
                <Card
                    className='text-center d-flex justify-content-center'
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            Registrar
                        </CardTitle>
                        <Form
                        /*onSubmit={handleLogin}*/
                        >
                            <Input
                                type='text'
                                placeholder='Nombre'
                                name='name'
                                autoComplete='off'
                                className='mb-3 border-top-0 border-end-0 border-start-0'
                            /*value={name}*/
                            /*onChange={handleInputChange}*/
                            />
                            <Input
                                type='text'
                                placeholder='E-mail'
                                name='email'
                                className='mb-3 border-top-0 border-end-0 border-start-0'
                                autoComplete='off'
                                /*value={email}*/
                                /*onChange={handleInputChange}*/
                            />
                            <Input
                                type='password'
                                placeholder='Contraseña'
                                name='password'
                                className='mb-3 border-top-0 border-end-0 border-start-0'
                                autoComplete='current-password'
                                /*value={password}*/
                                /*onChange={handleInputChange}*/
                            />
                            <Input
                                type='password'
                                placeholder='Re-Contraseña'
                                name='repassword'
                                className='mb-3 border-top-0 border-end-0 border-start-0'
                                autoComplete='current-password'
                                /*value={repassword}*/
                                /*onChange={handleInputChange}*/
                            />
                            <div className='d-grid'>
                                <Button
                                    type='submit'
                                    color='primary'
                                    block
                                /*disabled={loading}*/
                                >
                                    Registrar
                                </Button>
                            </div>
                            <div className='mb-5'></div>
                            <Link
                                className='link mt-5'
                                to="/auth/login"
                            >
                                Ya registrado?
                            </Link>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Container>
    );
};