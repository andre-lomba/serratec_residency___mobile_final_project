import React, { useContext, useState, useEffect } from "react"
import { View, TextInput, TouchableOpacity } from "react-native"
import { PersonagensContext } from "../../context/PersonagensContext";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import { PersonagemProps, getPersonagens } from "../../services/api/apiMarvel";

export default function Pesquisa() {
    const { personagens, setPersonagens } = useContext(PersonagensContext);
    const [input, setInput] = useState<string>("")

    const handleChangeText = async (valor: string) => {
        setInput(valor)
        if (valor.length < 1) {
            await getPersonagens().then((res) => setPersonagens(res));
        }
    }

    const handlePressSearch = async () => {
        const valorFormatado: string = input.toLowerCase().trim();
        let lista: PersonagemProps[] = [];
        await getPersonagens().then((res) => lista = res)
        if (valorFormatado.length > 0) {
            setPersonagens(lista.filter(personagem => personagem.nome.toLowerCase().includes(valorFormatado)))
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={input} onChangeText={handleChangeText} />
            <TouchableOpacity activeOpacity={0.5} onPress={handlePressSearch} style={styles.lupa}>
                <FontAwesome5 name={"search"} size={25} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}