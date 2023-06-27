import React, { useState } from 'react';
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput, TextInputProps, TouchableOpacity, View, } from "react-native";
import styles from "./styles";
import { Text } from 'react-native';

interface InputProps extends TextInputProps {
    iconName: string,
    password: boolean,
    label?: string
    error: string
}

export default function LoginInput({ iconName, password, label, error, ...rest }: InputProps) {
    const [mostraSenha, setMostraSenha] = useState<boolean>(false)
    const [escondeSenha, setEscondeSenha] = useState<boolean>(true)

    const handlePressMostrar = () => {
        setMostraSenha(mostraSenha ? false : true)
        setEscondeSenha(escondeSenha ? false : true)
    }

    return (
        <View style={styles.container}>
            <View style={styles.labelAndErrorView}>
                {label && <Text style={styles.label}>{label}</Text>}
                {error.length > 0 && <Text style={styles.error}>{error}</Text>}
            </View>
            <View style={styles.line}>
                <FontAwesome5 name={iconName} size={17} color="white" />
                <TextInput style={styles.input} {...rest} secureTextEntry={password ? escondeSenha : false} />
                {password &&
                    <TouchableOpacity activeOpacity={0.7} onPress={handlePressMostrar}>
                        <FontAwesome5 name={mostraSenha ? "eye" : "eye-slash"} size={18} color="white" />
                    </TouchableOpacity>
                }
            </View>
        </View>

    )
}