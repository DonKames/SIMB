import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Layout = () => {
    return(
        <div className='vh-100'>
            <NavBar className=''/>
            <Outlet className='h-100'/>
        </div>
        )
}