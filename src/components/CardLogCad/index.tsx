import React, { ReactNode, useState } from 'react';
import Logo from "../../assets/images/png-clipart-spider-man-carol-danvers-marvel-comics-superhero-comic-comics-avengers.png"
import { Text } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import styles from './styles';

interface CardLogCadProps {
    children: ReactNode;
    error: string
}

export default function CardLogCad({ children, error }: CardLogCadProps) {
    return (
        <View style={styles.card}>
            <View style={styles.logoAndErroView}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.erro}>{error}</Text>
            </View>
            {children}
        </View>
    )
}