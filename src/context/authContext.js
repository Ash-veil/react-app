import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
const [user, setUser] = useState(null);
useEffect(()=>{
    const savedUser = localStorage.getItem("user")
    if (savedUser) setUser(JSON.parse(savedUser))
}, [])

const register = async (username, email, password) => {
    const newUser = {username, email, password}
    localStorage.setItem("user", JSON.stringify(newUser)) 
    setUser(newUser)
}

const logout = () =>{
    setUser(null)
    localStorage.removeItem("user")
}

return(
    <AuthContext.Provider value={{ user, register, logout }}>
        { children }
    </AuthContext.Provider>
)

};

export const useAuth = () => {
    return useContext(AuthContext)
}
