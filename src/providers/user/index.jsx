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

      const newUser = {
        id: uid,
        avatar: userBlank,
        name: "Usuário do Google"
      }
      
      if (!displayName) {
        newUser.avatar = photoURL
        setUser(newUser)
        
      }else if(!photoURL) {
        newUser.name = displayName
        setUser(newUser)
        
      }else{
        newUser.avatar = photoURL
        newUser.name = displayName
        setUser(newUser)
      }

      localStorage.setItem("@Bloxs:user", JSON.stringify(newUser))
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