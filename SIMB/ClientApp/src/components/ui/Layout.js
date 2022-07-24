import { Outlet } from 'react-router-dom';
import { FooterBar } from './FooterBar';
import { NavBar } from './NavBar';

export const Layout = () => {
    return(
        <div className='min-vh-100 container-fluid mw-100 d-flex flex-column h-100'>
            <NavBar className=''/>
            <Outlet />
            <FooterBar />
        </div>
        );
};