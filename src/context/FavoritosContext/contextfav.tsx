import React, {createContext, useState} from "react";
import { PersonagemProps, UserProps, getPersonagem, getUser, updateAddFav, updateRemoveFav } from "../../services/api/apiMarvel";
import { getData } from "../../services/asyncStorage";
import { FlatList } from "react-native-gesture-handler";
import PersonagemHome from "../../components/PersonagemHome";

interface TipoContextoFavoritos {
    listaFavorita: PersonagemProps[],
    // adiciona item
    // remove item
};

export const ContextoFavorito = createContext<TipoContextoFavoritos>({
    listaFavorita: [],
    // adiciona item
    // remove item
})