import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ModulesScreen } from '../modules/ModulesScreen';
import { WarehouseScreen } from '../modules/warehouse/WarehouseScreen';

export const ModulesRouter = () => {
  return (
    <Routes>
        <Route index element={<ModulesScreen />} />
        <Route path="warehouse" element={ <WarehouseScreen />} />
    </Routes>
  )
};