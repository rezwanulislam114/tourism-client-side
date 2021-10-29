import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import firebaseInitialize from "../pages/Authentication/Firebase/firebase.init";

const useFirebase = () => {
    firebaseInitialize();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    // google login 
    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    // on auth state change 
    onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user);
        }
        else {
            // setUser({})
            // logout done
        }
        setLoading(false)
    })

    // sign out
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(true))
    }

    return {
        googleLogin,
        user,
        error,
        logout,
        loading,
        setLoading,
        setError,
        setUser
    }
}

export default useFirebase;