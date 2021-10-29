import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Register/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(res => {
                setUser({});
            }).finally(() => setIsLoading(false))
            .catch(error => {

            })
    }

    //observer

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, [])

    return {
        user,
        auth,
        googleSignIn,
        logOut,
        isLoading,
        error
    }

}

export default useFirebase;