
import { useEffect } from 'react';
import { useState } from 'react';
// import googole auth orovider
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

// step 12 call initialize function
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            })
    }
    // step--09 create signout

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
            // ata deuyar karon signout korar pore user state thakbena tai
        })
    }
    // usEffect set and also one state inside it for create a common state
    // the below step is only because of create user common state
    // this is step 08 and 09
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            // else ta falai diyechie
        });

    }, [])
    // ami kake kae pathabe next page e use korar jonno
    return {
        user,
        signInUsingGoogle,
        logOut,
    }
};

export default useFirebase;