
// step 13 is running
import React from 'react';
import { createContext } from 'react';
import useFirebase from '../useFirebase/useFirebase';

// aikhane create contex ke use korar jonne export kore dilam
export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
    // const { children } = props;
    //  step 15 set Auth Provider value useFirebase the cal
    // Auth Provider in the App.js er vitore
    const allContext = useFirebase();
    return (
        <AuthContex.Provider value={allContext}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;