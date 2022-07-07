import { createContext, useContext, useEffect, useState } from "react";

import userBlank from "../../assets/icons/user-blank.png"

import { loginWithGoogle } from "../../services/user";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("@Bloxs:user")) || null)

  useEffect(() => {
    console.log(user)
  }, [user])

  const handleGoogleLogin = async () => {
    const result = await loginWithGoogle()

    if (result.user) {
      const { uid, displayName, photoURL } = result.user
      if (!displayName || !photoURL) {

        setUser({
          id: uid,
          avatar: userBlank,
          name: "Usuário do Google"
        })

      }

      setUser({
        id: uid,
        avatar: photoURL,
        name: displayName
      })

      localStorage.setItem("@Bloxs:user", JSON.stringify(result.user.uid))
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleGoogleLogin
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);