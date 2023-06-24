import React, { useState, ReactNode } from 'react';
import { ImageBackground } from 'react-native';
import { View } from 'react-native';
import Fundo from "../../assets/images/background.png"
import styles from './styles';

interface BackgroundProps {
    children: ReactNode;
}


export default function Background({ children }: BackgroundProps) {
    return (
        <View style={styles.container}>
            <ImageBackground source={Fundo} resizeMode="cover" style={styles.background}>
                {children}
            </ImageBackground>
        </View>
    )
}