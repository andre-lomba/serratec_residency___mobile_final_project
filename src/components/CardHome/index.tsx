import React, { ReactNode, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';


interface CardHomeProps {
    children: ReactNode;
}

export default function CardHome({ children }: CardHomeProps) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}