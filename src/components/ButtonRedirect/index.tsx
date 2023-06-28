import React, { ReactNode } from 'react';
import { View, Image, Button, TouchableOpacity, Linking, Text, TouchableOpacityProps } from "react-native";
import styles from "./styles";

interface ButtonRedirectProps extends TouchableOpacityProps {
    children: ReactNode;
}

export const ButtonRedirect = ({ children, ...rest }: ButtonRedirectProps) => {
    return (
        <TouchableOpacity
            onPress={async () => {
                await Linking.openURL("https://marvel.fandom.com/pt-br/wiki/P%C3%A1gina_principal");
            }}
            style={styles.container}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    )
}