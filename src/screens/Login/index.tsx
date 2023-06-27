import React, { useState } from 'react';
import { View } from "react-native"
import styles from "./styles"
import LoginInput from '../../components/LoginInput';
import ButtonAcess from '../../components/Button/ButtonAcess';
import { LoginText } from '../../components/LoginText';
import Acessar from "../../assets/images/ACESSAR.png";
import CardLogCad from '../../components/CardLogCad';
import Background from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import { getPersonagens } from '../../api/apiMarvel';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [erro, setErro] = useState<string>(" ")
    const navigation = useNavigation<LoginScreenNavigationProp>()

    const handleChangeEmail = (valor: string) => {
        setEmail(valor)
    }

    const handleChangeSenha = (valor: string) => {
        setSenha(valor)
    }

    const handlePressAcess = () => {
        getPersonagens();
        setTimeout(() => {
            setErro(" ")
            navigation.navigate('Drawer')
        }, 1000)
    }

    const handlePressCadastrar = () => {
        navigation.navigate('Cadastro')
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