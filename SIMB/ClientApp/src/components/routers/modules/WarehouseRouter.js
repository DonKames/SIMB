import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { startLoadingWarehouses } from '../../../actions/modules/warehouse';
import { AdminScreen } from '../../modules/warehouse/adminScreen/AdminScreen';
import { WarehouseScreen } from '../../modules/warehouse/WarehouseScreen';

export const WarehouseRouter = () => {

	const dispatch = useDispatch();

	dispatch(startLoadingWarehouses());

	return (
		<Routes>
	    	<Route index element={<WarehouseScreen />} />
    		<Route path="admin" element={<AdminScreen />} />
    	</Routes>
	);
};
