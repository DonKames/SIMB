import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { startLoadingWarehouses, startLoadingEmployees, startLoadingCategories, startLoadingSubCategories } from '../../../actions/modules/warehouse';
import { AdminScreen } from '../../modules/warehouse/adminScreen/AdminScreen';
import { SubAdminScreen } from '../../modules/warehouse/subAdminScreen/SubAdminScreen';
import { WarehouseKeeperScreen } from '../../modules/warehouse/warehouseKeeperScreen/WarehouseKeeperScreen';
import { WarehouseScreen } from '../../modules/warehouse/WarehouseScreen';

export const WarehouseRouter = () => {

	const dispatch = useDispatch();

	dispatch(startLoadingWarehouses());
	dispatch(startLoadingEmployees());
	dispatch(startLoadingCategories());
	dispatch(startLoadingSubCategories());

	return (
		<Routes>
	    	<Route index element={<WarehouseScreen />} />
    		<Route path="admin" element={<AdminScreen />} />
    		<Route path="subadmin" element={<SubAdminScreen />} />
    		<Route path="warehousekeeper" element={<WarehouseKeeperScreen />} />
    	</Routes>
	);
};
