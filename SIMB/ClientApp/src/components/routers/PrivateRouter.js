import { Routes, Route, Navigate } from "react-router-dom";
import { SubscribeScreen } from "../auth/SubscribeScreen";
import { WareHouseScreen } from "../warehouse/WareHouseScreen";

export const PrivateRouter = () => {
    return (
        <Routes>
            <Route path="subscribe" element={<SubscribeScreen />} />
            <Route path="*" element={ <WareHouseScreen /> } />
        </Routes>
    );
}