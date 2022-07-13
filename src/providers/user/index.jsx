import { createContext, useContext, useState } from "react";

import userBlank from "../../assets/icons/user-blank.png";

import { loginUser, loginWithGoogle, signUpUser } from "../../services/user";

import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("@Bloxs:user")) || null);

  const handleGoogleLogin = async () => {
    const result = await loginWithGoogle();

    if (result.user) {
      const { uid, displayName, photoURL, email } = result.user;

      let user = {
        id: uid,
        avatar: photoURL,
        name: displayName,
        email: email
      }

      toast.success(`Bem-vindo a Bloxs Investimentos ${displayName}`)
      setTimeout(() => {

        setUser(user);
        localStorage.setItem("@Bloxs:user", JSON.stringify(user));
      }, 2000)
    }
  }

  const handleSignup = async (data) => {

    delete data.passwordConfirmation;
    data.id = uuidv4();
    data.avatar = userBlank;

    const signup = await signUpUser(data);

    if (signup) {
      toast.success("Cadastrado com sucesso");

      setTimeout(() => {

        delete data.password;
        setUser(data);
        localStorage.setItem("@Bloxs:user", JSON.stringify(data));

      }, 2000)
    }
  }

  const handleLogin = async (data) => {
    const login = await loginUser(data);

    if (login) {
      toast.success(`Bem-vindo a Bloxs Investimentos ${login.name}`);

      setTimeout(() => {

        setUser(login);
        localStorage.setItem("@Bloxs:user", JSON.stringify(login));

      }, 2000)
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleGoogleLogin,
        handleSignup,
        handleLogin
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);