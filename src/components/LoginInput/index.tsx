import React, { useState } from 'react';
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput, TextInputProps, TouchableOpacity, View, } from "react-native";
import styles from "./styles";

interface InputProps extends TextInputProps {
    iconName: string,
    password: boolean,
}

export default function LoginInput({ iconName, password, ...rest }: InputProps) {
    const [mostraSenha, setMostraSenha] = useState<boolean>(false)
    const [escondeSenha, setEscondeSenha] = useState<boolean>(true)

    const handlePressMostrar = () => {
        setMostraSenha(mostraSenha ? false : true)
        setEscondeSenha(escondeSenha ? false : true)
    }

    return (
        <View style={styles.container}>
            <FontAwesome5 name={iconName} size={17} color="white" />
            <TextInput style={styles.input} {...rest} secureTextEntry={password ? escondeSenha : false} />
            {password &&
                <TouchableOpacity activeOpacity={0.7} onPress={handlePressMostrar}>
                    <FontAwesome5 name={mostraSenha ? "eye" : "eye-slash"} size={18} color="white" />
                </TouchableOpacity>
            }
        </View>
    )
}