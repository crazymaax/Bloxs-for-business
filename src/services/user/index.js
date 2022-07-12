import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app, instanceUser } from "../../services"; //Necessário a importação para o Login do Google
import { toast } from "react-toastify";

export const signUpUser = async (data) => {
    const response = await instanceUser
        .post("/register", data)
        .then((response) => {
            return true;
        })
        .catch((error) => {
            if (error.response.data === "Email already exists") {
                toast.error("Email já cadastrado!");
            } else {
                toast.error("Algo deu errado!");
            }
        });

    return response;
};


export const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const response = signInWithPopup(auth, provider);

    return response;
};