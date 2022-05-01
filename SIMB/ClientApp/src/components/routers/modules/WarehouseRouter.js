import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { startLoadingWarehouses, startLoadingEmployees } from '../../../actions/modules/warehouse';
import { AdminScreen } from '../../modules/warehouse/adminScreen/AdminScreen';
import { SubAdminScreen } from '../../modules/warehouse/subAdminScreen/SubAdminScreen';
import { WarehouseScreen } from '../../modules/warehouse/WarehouseScreen';

export const WarehouseRouter = () => {

	const dispatch = useDispatch();

	dispatch(startLoadingWarehouses());
	dispatch(startLoadingEmployees());

	return (
		<Routes>
	    	<Route index element={<WarehouseScreen />} />
    		<Route path="admin" element={<AdminScreen />} />
    		<Route path="subadmin" element={<SubAdminScreen />} />
    	</Routes>
	);
};
