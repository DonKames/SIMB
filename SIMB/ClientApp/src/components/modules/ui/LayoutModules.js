import { Outlet } from 'react-router-dom';
import { NavBarModules } from './NavBarModules';

export const LayoutModules = () => {
    return(
        <div className=''>
            <NavBarModules className=''/>
            <Outlet />
        </div>
        );
};