import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext =createContext(null);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser =(email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const logOut = () =>{
        return signOut(auth)

    }
    
    // observe auth change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('observing current user', currentUser);
        })
        return () =>{
            unSubscribe()
        }
    },[]);

    


    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
  };


/* 
* 1. create context and export it
* 2. set provider with value
* 3. use the auth provider in the main.jsx file
* 4. access children in the auth provider components as use it in the middle of the provider

*/