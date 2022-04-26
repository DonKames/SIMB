import { Route, Routes } from 'react-router-dom';
import { ModulesScreen } from '../ModulesScreen';
import { LayoutModules } from '../ui/LayoutModules';
import { WarehouseScreen } from '../warehouse/WarehouseScreen';
import { AdminScreen } from '../warehouse/AdminScreen';

export const ModulesRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<LayoutModules />}>
          <Route index element={<ModulesScreen />} />
          <Route path="warehouse">
            <Route index element={<WarehouseScreen />} />
            <Route path="admin" element={<AdminScreen />} />
          </Route>
          {/* <Route path="/warehouse/admin" element={<AdminScreen />} />
          <Route path="/warehouse" element={<WarehouseScreen />}>
            <Route path="./admin" element={<AdminScreen />} />
          </Route> */}
        </Route>
      </Routes>
    );
};