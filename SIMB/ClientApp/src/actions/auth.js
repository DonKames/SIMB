import Swal from 'sweetalert2';
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, uiStartLoading } from './ui';
import {
    createUserWithEmailAndPassword,
    getAuth, signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
//import { notesLogout } from "./notes";


const auth = getAuth();

export const startRegisterNameEmailPass = (name, email, password) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, {
                    displayName: name
                });
                dispatch(
                    login(user.uid, user.displayName)
                );
            })
            .catch(e => {
                Swal.fire('Error', 'Error en el registro', 'error');
            });
    }
};

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(uiStartLoading());

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                
                dispatch(login(user.uid, user.displayName, user.photoURL, user.email ));
                dispatch(finishLoading());

            })
            .catch(e => {
                switch (e.code) {
                    case 'auth/user-not-found':

                    // eslint-disable-next-line no-fallthrough
                    case 'auth/wrong-password':
                        Swal.fire('ERROR', 'Usuario o Contraseña Incorrecta', 'error');
                        break;

                    default:
                        console.log(e);
                        Swal.fire('Error', 'Error Desconocido', 'error')
                        break;
                }
                dispatch(finishLoading());
            });
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                console.log(user + " - google login");
                const { displayName, uid, photoURL, email } = user;
                dispatch(
                    login(uid, displayName, photoURL, email)
                )
            })
    }
};

export const login = (uid, displayName, photoURL, email) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
        photoURL,
        email
    }
});

export const logout = () => ({
    type: types.logout
})

export const startLogout = () => {
    return async (dispatch) => {
        await signOut(auth);
        dispatch(logout());
    };
};