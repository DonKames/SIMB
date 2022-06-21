import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { startLoadingWarehouse } from '../../../actions/modules/warehouse';
import { ModulesScreen } from '../../modules/ModulesScreen';
import { LayoutModules } from '../../modules/ui/LayoutModules';
import { WarehouseRouter } from './WarehouseRouter';



export const ModulesRouter = () => {

  const dispatch = useDispatch();

  useEffect(() => {
  dispatch( startLoadingWarehouse() );
  }, [dispatch]);

    return (
      <Routes>
        <Route index element={<ModulesScreen />} />
        <Route path="warehouse/*" element={<WarehouseRouter />} />
      </Routes>
    );
};