import { Routes, Route } from "react-router-dom";
import { SubscribeScreen } from "../auth/SubscribeScreen";
import { ModulesScreen } from "../modules/ModulesScreen";
import { WarehouseScreen } from "../modules/warehouse/WarehouseScreen";
import { LogoutScreen } from "../modules/warehouse/LogoutScreen";
import { ModulesRouter } from "./ModulesRouter";

export const PrivateRouter = () => {
    return (
      <Routes>
        <Route path="subscribe" element={<SubscribeScreen />} />
        <Route path="modules/*" element={<ModulesRouter />} />
        <Route path="*" element={<LogoutScreen />} />
      </Routes>
    );
};