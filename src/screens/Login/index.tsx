import React, { useState } from 'react';
import { View } from "react-native"
import styles from "./styles"
import LoginInput from '../../components/LoginInput';
import ButtonAcess from '../../components/Button/ButtonAcess';
import { LoginText } from '../../components/LoginText';
import Acessar from "../../assets/images/ACESSAR.png";
import { Color } from '../../components/COLOR/Colors';
import CardLogCad from '../../components/CardLogCad';
import Background from '../../components/Background';



export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [erro, setErro] = useState<string>(" ")

    const handleChangeEmail = (valor: string) => {
        setEmail(valor)
    }

    const handleChangeSenha = (valor: string) => {
        setSenha(valor)

    }

    const handlePressAcess = () => {
        setErro("*Login inválido!")
        setTimeout(() => {
            setErro(" ")
        }, 2000)
    }

    const handlePressCadastrar = () => {

    }

    return (
        <Background>
            <CardLogCad error={erro}>
                <View style={styles.inputsView}>
                    <LoginInput
                        iconName='envelope'
                        value={email}
                        onChangeText={handleChangeEmail}
                        password={false}
                        label='Email'
                        error=''
                    />
                    <LoginInput
                        iconName='key'
                        value={senha}
                        onChangeText={handleChangeSenha}
                        secureTextEntry
                        password={true}
                        label='Senha'
                        error=''
                    />
                </View>
                <View style={styles.accessView}>
                    <ButtonAcess onPress={handlePressAcess} imageSource={Acessar} estilo={styles.buttonImage} />
                    <LoginText onPress={handlePressCadastrar} />
                </View>
            </CardLogCad>
        </Background>
    )
}