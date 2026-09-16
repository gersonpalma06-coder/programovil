import React, { useContext } from 'react';
import { createContext, useState } from 'react';  

//1 Tipado del objeto principal del contexto
type user = {
    email: string;
    authToken?: string;
    sessionToken?: string;
    role?: string;
} | null;

type AuthContextType = {
    user: user | null;
    login: (email: string) => boolean;
    logout: () => {};
}

//2 Crear el contexto
const AuthContext = createContext<AuthContextType | null>(null);

//3 Creacion del provider : el medio por el cual manejamos el estado 
// desde otras pantallas
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<user>(null);
    const login = (email: string): boolean => {
        const isAllowed = email.endsWith('.edu');
        if (isAllowed) {
            setUser({email});
        }
        return isAllowed;
    }

    const logout = () => {
        return "";
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

//4 La creacion del hook personalizado : exposicion del contexto a 
// componentes de la aplicacion
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) 
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    
    return context;
}