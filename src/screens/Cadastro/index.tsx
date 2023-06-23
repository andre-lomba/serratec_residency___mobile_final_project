import React, { useState } from 'react';
import { Image, ImageBackground, View } from "react-native";
import Background from "../../assets/images/background.png"
import styles from "./styles";
import LoginInput from "../../components/LoginInput";
import ButtonAcess from "../../components/Button/ButtonAcess";
import Logo from "../../assets/images/png-clipart-spider-man-carol-danvers-marvel-comics-superhero-comic-comics-avengers.png"
import Cadastrar from "../../assets/images/CADASTRAR.png"
import { Color } from '../../components/COLOR/Colors';

export default function Cadastro() {
    const [nome, setNome] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [senhaConfirma, setSenhaConfirma] = useState<string>("")
    const [escondeSenha, setMostraSenha] = useState<boolean>(true)
    const [escondeSenhaConfirma, setMostraSenhaConfirma] = useState<boolean>(false)


    const handleChangeNome = (valor: string) => {
        setNome(valor);
    }
    const handleChangeEmail = (valor: string) => {
        setEmail(valor);
    }
    const handleChangeSenha = (valor: string) => {
        setSenha(valor);
    }
    const handleChangeSenhaConfirma = (valor: string) => {
        setSenhaConfirma(valor);
    }

    const handlePressMostraSenha = () => {
        setMostraSenha(escondeSenha ? false : true);
    }
    const handlePressMostraSenhaConfirma = () => {
        setMostraSenhaConfirma(escondeSenhaConfirma ? false : true);
    }

    const handlePressSubmit = () => {

    }


    return (
        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.background}>
                <View style={styles.card}>
                    <Image source={Logo} style={styles.logo} />
                    <View style={styles.inputsView}>
                        <LoginInput iconName='user' value={nome} onChangeText={handleChangeNome} password={false} />
                        <LoginInput iconName='envelope' value={email} onChangeText={handleChangeEmail} password={false} />
                        <LoginInput iconName='key' value={senha} onChangeText={handleChangeSenha} secureTextEntry={escondeSenha} password={true} />
                        <LoginInput iconName='key' value={senhaConfirma} onChangeText={handleChangeSenhaConfirma} secureTextEntry={escondeSenhaConfirma} password={true} />
                    </View>
                    <View style={styles.accessView}>
                        <ButtonAcess onPress={handlePressSubmit} imageSource={Cadastrar} cor={Color.amarelo} />
                    </View>
                </View>
            </ImageBackground >
        </View >
    )
}