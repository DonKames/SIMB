import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardTitle, Col, Container, Form, Input } from "reactstrap";

import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: 'camilo@hotmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    return (
        <Container
            className='vh-100 d-flex justify-content-center align-items-center bg-primary'
            fluid
        >
            <Col className='col-10 col-md-4 col-xxl-2'>
                <Card
                    className='d-flex justify-content-center'
                >
                    <CardBody>
                        <CardTitle className='text-center' tag="h5">
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
                                className='mb-3'
                                value={email}
                                onChange={handleInputChange}
                            />
                            <Input
                                type='password'
                                placeholder='Password'
                                name='password'
                                autoComplete='current-password'
                                className='mb-3'
                                value={password}
                                onChange={handleInputChange}
                            />
                            <div className='d-grid'>
                                <Button
                                    color='primary'
                                    block
                                    disabled={loading}
                                >
                                    Ingresar
                                </Button>
                            </div>
                            <hr />
                            <div>
                                <p>Ingresa con tu cuenta de:</p>
                                <Card
                                    className="google-btn bg-primary"
                                /*onClick={handleGoogleLogin}*/
                                >
                                    <div className='d-flex align-items-center'>
                                        <img className="google-icon bg-white h-100 rounded p-1" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                        <span className='mb-n1 flex-fill fw-bold text-center align-middle text-white'>Ingresar con GOOGLE</span>
                                    </div>
                                </Card>
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