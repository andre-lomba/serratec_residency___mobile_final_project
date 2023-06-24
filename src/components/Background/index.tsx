import React, { useState, ReactNode } from 'react';
import { ImageBackground, ImageBackgroundProps, StyleProp, ViewProps, ViewStyle } from 'react-native';
import { View } from 'react-native';
import Fundo from "../../assets/images/background.png"
import FundoVermelho from "../../assets/images/light_red.png"
import styles from './styles';

interface BackgroundProps {
    children: ReactNode;
    color?: boolean
    style?: StyleProp<ViewStyle>
}

export default function Background({ children, color, style }: BackgroundProps) {
    return (
        <View style={styles.container}>
            {color ?
                <ImageBackground source={FundoVermelho} resizeMode="cover" style={[styles.background, style]}>
                    {children}
                </ImageBackground>
                :
                <ImageBackground source={Fundo} resizeMode="cover" style={styles.background}>
                    {children}
                </ImageBackground>
            }
        </View>
    )
}