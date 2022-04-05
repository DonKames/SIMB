
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { login } from '../../actions/auth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';



export const AppRouter = () => {

    const auth = getAuth();

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {

            if (user?.uid) {

                setIsLoggedIn(true);
                dispatch(login(user.uid, user.displayName));

                //ESTE TMBN FUNCA
                // const notes = loadNotes( user.uid );

                // notes.then( notes => {
                //     dispatch( setNotes( notes ) );
                // });

            } else {

                setIsLoggedIn(false);

            };

            setChecking(false);

        });
    }, [dispatch, auth, setChecking, setIsLoggedIn]);

    if (checking) {
        return (
            <h1>Espere...</h1>
        );
    }

    return (
            <Routes>
                <Route path='/auth/*' element={<PublicRoutes isLoggedIn={isLoggedIn} />} />
                <Route path='/' element={<PrivateRoutes isLoggedIn={isLoggedIn} />} />
                <Route path='*' element={<Navigate to='/auth/login' />} />
            </Routes>
    );
};