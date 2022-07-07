import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../services"; //Necessário a importação para o Login do Google

export const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const response = signInWithPopup(auth, provider);

    return response;
};