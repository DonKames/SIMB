import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Layout = () => {
    return(
        <div className='min-vh-100'>
            <NavBar className=''/>
            <Outlet />
        </div>
        )
}