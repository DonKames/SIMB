import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { FooterBar } from './FooterBar';
import { NavBar } from './NavBar';

export const Layout = () => {
    return(
        <Container fluid className='min-vh-100 d-flex flex-column h-100' >
            
            <NavBar className=''/>
            <Outlet />
            <FooterBar />
        </Container>
        );
};