import React, { useState, useEffect } from 'react';
import { View } from "react-native"
import styles from "./styles"
import LoginInput from '../../components/LoginInput';
import ButtonAcess from '../../components/Button/ButtonAcess';
import { LoginText } from '../../components/LoginText';
import Acessar from "../../assets/images/ACESSAR.png";
import CardLogCad from '../../components/CardLogCad';
import Background from '../../components/Background';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import { UserProps, login } from '../../services/api/apiMarvel';
import { getData, storeData } from '../../services/asyncStorage';

export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [erro, setErro] = useState<string>(" ")
    const navigation = useNavigation<LoginScreenNavigationProp>()

    useFocusEffect(() => {
        getData("user").then((user) => {
            if (user !== null) {
                navigation.navigate('Drawer')
            }
        })
    })

    const handleChangeEmail = (valor: string) => {
        setEmail(valor)
    }

    const handleChangeSenha = (valor: string) => {
        setSenha(valor)
    }

    const handlePressAcess = async () => {
        try {
            const user: UserProps = (await login(email, senha)).user;
            storeData("user", user)
        } catch (error) {
            setErro("*Login inválido!")
            return;
        }
        setErro(" ")
        setTimeout(() => {
            navigation.navigate('Drawer')
        }, 1000)
    }

    const handlePressCadastrar = async () => {
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