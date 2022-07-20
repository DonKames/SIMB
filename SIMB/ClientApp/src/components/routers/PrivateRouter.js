import { Routes, Route } from "react-router-dom";

import { ConfigurationScreen } from "../home/configuration/ConfigurationScreen.jsx";
import { LogoutScreen } from "../modules/warehouse/LogoutScreen.jsx";
import { SubscribeScreen } from "../subscription/SubscribeScreen.js";
import { ModulesRouter } from "./modules/ModulesRouter.jsx";

export const PrivateRouter = () => {
    return (
      <Routes>
        <Route path="subscribe" element={<SubscribeScreen />} />
        <Route path="configure" element={<ConfigurationScreen />} />
        <Route path="modules/*" element={<ModulesRouter />} />
        <Route path="*" element={<LogoutScreen />} />
      </Routes>
    );
};