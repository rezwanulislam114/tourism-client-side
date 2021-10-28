import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import firebaseInitialize from "../pages/Authentication/Firebase/firebase.init";

const useFirebase = () => {
    firebaseInitialize();

    const [user, setUser] = useState();
    const [error, setError] = useState();

    const auth = getAuth();

    // google login 
    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
    }

    // on auth state change 
    onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user)
        }
        else {
            setUser({})
        }
    })

    // sign out
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => setError(error.message))
    }

    return {
        googleLogin,
        user,
        error,
        logout
    }
}

export default useFirebase;