import { Route, Routes } from 'react-router-dom';
import { ModulesScreen } from '../../modules/ModulesScreen';
import { LayoutModules } from '../../modules/ui/LayoutModules';
import { WarehouseRouter } from './WarehouseRouter';

export const ModulesRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<LayoutModules />}>
          <Route index element={<ModulesScreen />} />
          <Route path="warehouse/*" element={<WarehouseRouter />} />
        </Route>
      </Routes>
    );
};