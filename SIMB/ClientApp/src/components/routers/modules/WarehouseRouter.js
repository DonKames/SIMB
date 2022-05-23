import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { startLoadingWarehouses, startLoadingEmployees, startLoadingCategories, startLoadingSubCategories, startLoadingProduct, startLoadingProducts } from '../../../actions/modules/warehouse';
import { AdminScreen } from '../../modules/warehouse/adminScreen/AdminScreen';
import { SubAdminScreen } from '../../modules/warehouse/subAdminScreen/SubAdminScreen';
import { WarehouseKeeperScreen } from '../../modules/warehouse/warehouseKeeperScreen/WarehouseKeeperScreen';
import { MainScreen } from '../../modules/warehouse/mainScreen/MainScreen';

export const WarehouseRouter = () => {

	const dispatch = useDispatch();

	dispatch( startLoadingWarehouses() );
	dispatch( startLoadingEmployees() );
	dispatch( startLoadingCategories() );
	dispatch( startLoadingSubCategories() );
	dispatch( startLoadingProduct() );
	dispatch( startLoadingProducts() );

	return (
		<Routes>
	    	<Route index element={<MainScreen />} />
    		<Route path="admin" element={<AdminScreen />} />
    		<Route path="subadmin" element={<SubAdminScreen />} />
    		<Route path="keeper" element={<WarehouseKeeperScreen />} />
    	</Routes>
	);
};
