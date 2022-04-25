import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const ModulesLayout = () => {
    return(
        <div className='container-fluid'>
            <NavBar />
            <Outlet />
        </div>
        );
};