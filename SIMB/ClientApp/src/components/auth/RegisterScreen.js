import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { removeError, setError } from '../../actions/ui';
import { startRegisterNameEmailPass } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { Card, Col, Container, Form, Button } from 'react-bootstrap';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: 'kames',
        email: 'camilo@hotmail.com',
        password: '123456',
        repassword: '123456'
    });

    const { name, email, password, repassword } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if ( isFormValid() ) {
            dispatch( startRegisterNameEmailPass( name, email, password ) );
        };
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {

            const msgError = 'El nombre es Requerido';
            dispatch(setError(msgError));
            return false;

        } else if (!validator.isEmail(email)) {

            const msgError = 'Email Invalido';
            dispatch(setError(msgError));
            return false;

        } else if (password !== repassword || password.length < 5) {

            const msgError = 'Las passwords no son iguales o tienen menos de 6 caracteres.';
            dispatch(setError(msgError));
            return false;

        }

        dispatch(removeError());
        return true;
    }

    return (
        <Container
            className='vh-100 d-flex justify-content-center align-items-center bg-primary'
            fluid
        >
            <Col className='col-12 col-md-4 col-xxl-2'>
                <Card
                    className='text-center d-flex justify-content-center'
                >
                    <Card.Body>
                        <Card.Title tag="h5">
                            Registro
                        </Card.Title>
                        <Form
                            onSubmit={handleRegister}
                            className='animate__animated animate__fadeIn animate__faster'
                        >
                            <Form.Control
                                type='text'
                                placeholder='Nombre'
                                name='name'
                                autoComplete='off'
                                className='mb-3 border-top-0 border-end-0 border-start-0'
                                value={name}
                                onChange={handleInputChange}
                            />
                            <Form.Control
                                type='text'
                                placeholder='E-mail'
                                name='email'
                                className='mb-3 border-top-0 border-end-0 border-start-0'
                                autoComplete='off'
                                value={email}
                                onChange={handleInputChange}
                            />
                            <Form.Control
                                type='password'
                                placeholder='Contraseña'
                                name='password'
                                className='mb-3 border-top-0 border-end-0 border-start-0'
                                autoComplete='current-password'
                                value={password}
                                onChange={handleInputChange}
                            />
                            <Form.Control
                                type='password'
                                placeholder='Re-Contraseña'
                                name='repassword'
                                className='mb-3 border-top-0 border-end-0 border-start-0'
                                autoComplete='current-password'
                                value={repassword}
                                onChange={handleInputChange}
                            />
                            <div className='d-grid'>
                                <Button
                                    type='submit'
                                    color='primary'
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
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
};