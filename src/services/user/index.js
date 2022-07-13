import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app, instanceUser } from "../../services"; //Necessário a importação para o Login do Google
import { toast } from "react-toastify";

export const loginUser = async (data) => {
    const response = await instanceUser
        .post("/login", data)
        .then((response) => {
            return response.data.user;
        })
        .catch((error) => {
            if (error.response.data === "Incorrect password") {
                toast.error("Senha incorreta!");
            } else if (error.response.data === "Cannot find user") {
                toast.error("Email não cadastrado!");
            } else {
                toast.error("Algo deu errado!");
            }

            return false;
        });

    return response;
};

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