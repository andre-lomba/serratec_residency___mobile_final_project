import React, { useState } from 'react';
import { ImageBackground, View, Image, ToastAndroid } from "react-native"
import Background from "../../assets/images/background.png"
import Logo from "../../assets/images/png-clipart-spider-man-carol-danvers-marvel-comics-superhero-comic-comics-avengers.png"
import styles from "./styles"
import LoginInput from '../../components/LoginInput';
import ButtonAcess from '../../components/Button/ButtonAcess';
import { LoginText } from '../../components/LoginText';
import Acessar from "../../assets/images/ACESSAR.png";
import { Color } from '../../components/COLOR/Colors';



export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    const handleChangeEmail = (valor: string) => {
        setEmail(valor)
    }

    const handleChangeSenha = (valor: string) => {
        setSenha(valor)

    }

    const handlePressAcess = () => {
        notificationError();
    }

    const handlePressCadastrar = () => {

    }

    const notificationError = () => {
        ToastAndroid.show("Login inválido!", 5000);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.background}>
                <View style={styles.card}>
                    <Image source={Logo} style={styles.logo} />
                    <View style={styles.inputsView}>
                        <LoginInput iconName='envelope' value={email} onChangeText={handleChangeEmail} password={false} />
                        <LoginInput iconName='key' value={senha} onChangeText={handleChangeSenha} secureTextEntry password={true} />
                    </View>
                    <View style={styles.accessView}>
                        <ButtonAcess onPress={handlePressAcess} imageSource={Acessar} cor={Color.vermelho} />
                        <LoginText onPress={handlePressCadastrar} />
                    </View>
                </View>
            </ImageBackground >
        </View >
    )
}