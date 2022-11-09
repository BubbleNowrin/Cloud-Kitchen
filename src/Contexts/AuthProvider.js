import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create user for email password authentication
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in for email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //signout functionality
    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('token');
        return signOut(auth);
    }

    //google signin functionality
    const googleLogin = (googleProvider) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //user profile update functionality
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        signIn,
        logOut,
        googleLogin,
        updateUserProfile,
        user,
        loading,
        setLoading,
        setUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;