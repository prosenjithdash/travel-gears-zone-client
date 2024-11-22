// Auth Provider 
// Context API

import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged } from "firebase/auth";
// import axios from 'axios';
import { GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    // state
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google Provider
    const googleProvider = new GoogleAuthProvider();
    // Register
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LogOut
    const Logout = () => {
        return signOut(auth);
    }

    // Google
    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // When hold user with unsubscribe
    // and use jwt
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                axios.post(`http://localhost:8000/authentication`, { email: currentUser.email }).then(data => {
                    if (data.data) {
                        localStorage.setItem('access-token', data?.data?.token)
                        setLoading(false)
                    }
                })
            } else {
                localStorage.removeItem('access-token')
                setLoading(false);
            }
        })
        return () => {
            return unsubscribe();
        }
    }, []);


    // For pass Info
    const authInfo = {
        user,
        loading,
        CreateUser,
        Login,
        Logout,
        GoogleLogin
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;