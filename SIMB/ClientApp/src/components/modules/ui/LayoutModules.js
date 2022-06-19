import { Outlet } from 'react-router-dom';
import { NavBarModules } from './NavBarWarehouse';

export const LayoutModules = () => {
    return(
        <div className=''>
            <NavBarModules className=''/>
            <Outlet />
        </div>
        );
};