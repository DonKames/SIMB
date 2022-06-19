import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { startLoadingWarehouses, startLoadingEmployees, startLoadingCategories, startLoadingSubCategories, startLoadingProduct, startLoadingProducts, startLoadingWarehouse } from '../../../actions/modules/warehouse';
import { AdminScreen } from '../../modules/warehouse/adminScreen/AdminScreen';
import { SubAdminScreen } from '../../modules/warehouse/subAdminScreen/SubAdminScreen';
import { WarehouseKeeperScreen } from '../../modules/warehouse/warehouseKeeperScreen/WarehouseKeeperScreen';
import { MainScreen } from '../../modules/warehouse/mainScreen/MainScreen';
import { LayoutModules } from '../../modules/ui/LayoutModules';
import { ConfigurationScreen } from '../../modules/warehouse/configurationScreen/ConfigurationScreen';

export const WarehouseRouter = () => {

	const dispatch = useDispatch();

	dispatch( startLoadingWarehouses() );
	dispatch( startLoadingEmployees() );
	dispatch( startLoadingCategories() );
	dispatch( startLoadingSubCategories() );
	dispatch( startLoadingProduct() );
	dispatch( startLoadingProducts() );
  dispatch( startLoadingWarehouse() );

// TODO:Agregar dispatch para cargar la bodega por defecto.
	return (
    <Routes>
      <Route path="/" element={<LayoutModules />}>
        <Route index element={<MainScreen />} />
        <Route path="admin" element={<AdminScreen />} />
        <Route path="subadmin" element={<SubAdminScreen />} />
        <Route path="keeper" element={<WarehouseKeeperScreen />} />
        <Route path="configuration" element={<ConfigurationScreen />} />
      </Route>
    </Routes>
  );
};
