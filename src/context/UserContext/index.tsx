import React, { useState, createContext} from 'react';
import { UserProps} from '../../services/api/apiMarvel';

interface UserProviderProps {
    children: React.ReactNode
}

interface UserContextValue {
    user: UserProps;
    setUser: React.Dispatch<React.SetStateAction<UserProps>>;
}

export const UserContext = createContext<UserContextValue>({
    user: Object(),
    setUser: () => { },
});

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<UserProps>(Object)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}