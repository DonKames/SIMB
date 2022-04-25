import { Route, Routes } from 'react-router-dom';
import { ModulesScreen } from '../ModulesScreen';
import { LayoutModules } from '../ui/LayoutModules';
import { WarehouseScreen } from '../warehouse/WarehouseScreen';

export const ModulesRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<LayoutModules />}>
          <Route index element={<ModulesScreen />} />
          <Route path="warehouse" element={<WarehouseScreen />} />
        </Route>
      </Routes>
    );
};