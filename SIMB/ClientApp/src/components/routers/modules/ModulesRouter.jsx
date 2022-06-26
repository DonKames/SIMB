import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setActiveWarehouse, startLoadingWarehouse } from '../../../actions/modules/warehouse';
import { ModulesScreen } from '../../modules/ModulesScreen';
import { WarehouseRouter } from './WarehouseRouter';



export const ModulesRouter = () => {

  const dispatch = useDispatch();

  const warehouseId = useSelector((state) => state.warehouse?.warehouse?.mainWarehouse);
  console.log(warehouseId);

  useEffect(() => {
    dispatch( startLoadingWarehouse() );
    dispatch( setActiveWarehouse(warehouseId) );
  }, [dispatch, warehouseId]);

    return (
      <Routes>
        <Route index element={<ModulesScreen />} />
        <Route path="warehouse/*" element={<WarehouseRouter />} />
      </Routes>
    );
};