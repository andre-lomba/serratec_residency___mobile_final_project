import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import styles from "./styles";

interface LoginTextProps extends TouchableOpacityProps { };

export function LoginText({ ...rest }: LoginTextProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Não tem conta? </Text>
            <TouchableOpacity activeOpacity={0.5} {...rest}>
                <Text style={[styles.text, { textDecorationLine: 'underline' }]}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    )
}