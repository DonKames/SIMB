import { Routes, Route } from "react-router-dom";
import { SubscribeScreen } from "../auth/SubscribeScreen";
import { LogoutScreen } from "../modules/warehouse/LogoutScreen.jsx";
import { ModulesRouter } from "./modules/ModulesRouter.jsx";

export const PrivateRouter = () => {
    return (
      <Routes>
        <Route path="subscribe" element={<SubscribeScreen />} />
        <Route path="modules/*" element={<ModulesRouter />} />
        <Route path="*" element={<LogoutScreen />} />
      </Routes>
    );
};