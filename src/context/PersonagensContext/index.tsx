import React, { useState, createContext, useEffect } from 'react';
import { PersonagemProps, getPersonagens } from '../../services/api/apiMarvel';

interface PersonagensProviderProps {
    children: React.ReactNode
}

interface PersonagensContextValue {
    personagens: PersonagemProps[];
    setPersonagens: React.Dispatch<React.SetStateAction<PersonagemProps[]>>;
}

export const PersonagensContext = createContext<PersonagensContextValue>({
    personagens: [],
    setPersonagens: () => { },
});

export const PersonagensProvider = ({ children }: PersonagensProviderProps) => {
    const [personagens, setPersonagens] = useState<PersonagemProps[]>([])

    return (
        <PersonagensContext.Provider value={{ personagens, setPersonagens }}>
            {children}
        </PersonagensContext.Provider>
    )
}