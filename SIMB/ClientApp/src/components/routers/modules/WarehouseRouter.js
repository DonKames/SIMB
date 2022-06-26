import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { startLoadingWarehouses, startLoadingEmployees, startLoadingCategories, startLoadingSubCategories, startLoadingProduct, startLoadingProducts, setActiveWarehouse } from '../../../actions/modules/warehouse';
import { AdminScreen } from '../../modules/warehouse/adminScreen/AdminScreen';
import { SubAdminScreen } from '../../modules/warehouse/subAdminScreen/SubAdminScreen.jsx';
import { WarehouseKeeperScreen } from '../../modules/warehouse/warehouseKeeperScreen/WarehouseKeeperScreen.jsx';
import { MainScreen } from '../../modules/warehouse/mainScreen/MainScreen';
import { LayoutModules } from '../../modules/ui/LayoutModules';
import { ConfigurationScreen } from '../../modules/warehouse/configurationScreen/ConfigurationScreen';
import { useEffect } from 'react';

export const WarehouseRouter = () => {
  const dispatch = useDispatch();

  const warehouseId = useSelector((state) => state.warehouse?.warehouse?.activeWarehouse);
  console.log(warehouseId);
  
  //dispatch( startLoadingWarehouse() );
  useEffect(() => {
    dispatch(startLoadingWarehouses());
    dispatch(startLoadingEmployees());
    dispatch(startLoadingProduct(warehouseId));
    dispatch(startLoadingProducts(warehouseId));
    dispatch(startLoadingCategories(warehouseId));
    dispatch(startLoadingSubCategories(warehouseId));
	  dispatch(setActiveWarehouse(warehouseId));{
    dispatch(startLoadingSku(warehouseId));
    }
  }, [dispatch, warehouseId]);

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
