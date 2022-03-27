import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardTitle, Col, Container, Form, Input } from "reactstrap";

export const LoginScreen = () => {
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
                            Login
                        </CardTitle>
                        <Form
                        /*onSubmit={handleLogin}*/
                        >
                            <Input
                                type='email'
                                placeholder='E-mail'
                                name='email'
                                autoComplete='off'
                                className='mb-3 border-top-0 border-end-0 border-start-0'
                            /*value={email}*/
                            /*onChange={handleInputChange}*/
                            />
                            <Input
                                type='password'
                                placeholder='Password'
                                name='password'
                                autoComplete='current-password'
                                className='mb-3'
                            /*value={password}*/
                            /*onChange={handleInputChange}*/
                            />
                            <div className='d-grid'>
                                <Button
                                    color='primary'
                                    block
                                /*disabled={loading}*/
                                >
                                    Ingresar
                                </Button>
                            </div>
                            <hr />
                            <div className='auth__social-networks'>
                                <p>Ingresa con tu cuenta de:</p>
                                <div
                                    className="google-btn"
                                /*onClick={handleGoogleLogin}*/
                                >
                                    <div className="google-icon-wrapper">
                                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                    </div>
                                    <p className="btn-text">
                                        <b>Ingresar con GOOGLE</b>
                                    </p>
                                </div>
                            </div>
                            <Link
                                className='link'
                                to="/auth/register"
                            >
                                Crear nueva Cuenta
                            </Link>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Container>
    );
};