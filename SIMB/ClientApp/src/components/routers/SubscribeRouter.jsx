import { Routes, Route } from "react-router-dom";
import { BasicPlanSubscription } from "../subscription/BasicPlanSubscription";
import { SubscribeScreen } from "../subscription/SubscribeScreen";


export const SubscribeRouter = () => {
  return (
    <>
        <Routes>
            <Route index element={<SubscribeScreen />} />
            <Route path="subscribe" element={<SubscribeScreen />} />
            <Route path="basicPlan" element={<BasicPlanSubscription />} />
            {/* <Route path="configure" element={<ConfigurationScreen />} />
            <Route path="modules/*" element={<ModulesRouter />} /> */}
            <Route path="*" element={<SubscribeScreen />} />
        </Routes>
    </>
  )
}
