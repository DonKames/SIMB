import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';

const isLoggedIn = false;

export const AppRouter = () => {
    return (
            <Routes>
                <Route path='/auth/*' element={<PublicRoutes isLoggedIn={isLoggedIn} />} />
                <Route path='/' element={<PrivateRoutes isLoggedIn={isLoggedIn} />} />
                <Route path='*' element={<Navigate to='/auth/login' />} />
            </Routes>
    );
};