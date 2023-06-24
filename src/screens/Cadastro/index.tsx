import React, { useState } from 'react';
import { View } from "react-native";
import styles from "./styles";
import LoginInput from "../../components/LoginInput";
import ButtonAcess from "../../components/Button/ButtonAcess";
import Cadastrar from "../../assets/images/CADASTRAR.png"
import CardLogCad from '../../components/CardLogCad';
import Background from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';

type CadastroScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cadastro'>;

export default function Cadastro() {
    const [nome, setNome] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [senhaConfirma, setSenhaConfirma] = useState<string>("")
    const [erro, setErro] = useState<string>(" ")
    const [erroNome, setErroNome] = useState<string>("")
    const [erroEmail, setErroEmail] = useState<string>("")
    const [erroSenha, setErroSenha] = useState<string>("")
    const [erroConfirmaSenha, setErroConfirmaSenha] = useState<string>("")
    const navigation = useNavigation<CadastroScreenNavigationProp>()

    const testaEmail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const handleChangeNome = (valor: string) => {
        if (valor.length > 0 && valor.length < 3) {
            setErroNome("*No mínimo 3 caracteres")
        } else {
            setErroNome("")
        }
        setNome(valor);
    }
    const handleChangeEmail = (valor: string) => {
        const testeResult: boolean = testaEmail.test(valor)
        if (valor.length > 0 && !testeResult) {
            setErroEmail("*Padrão de email incorreto")
        } else {
            setErroEmail("")
        }
        setEmail(valor);
    }
    const handleChangeSenha = (valor: string) => {
        if (valor.length > 0 && valor.length < 6) {
            setErroSenha("*No mínimo 6 carcarteres")
        } else {
            setErroSenha("")
        }
        setSenha(valor);
    }
    const handleChangeSenhaConfirma = (valor: string) => {
        if (valor !== senha) {
            setErroConfirmaSenha("*Deve ser igual à senha")
        } else {
            setErroConfirmaSenha("")
        }
        setSenhaConfirma(valor);
    }

    const handlePressSubmit = () => {
        if (erroNome.length > 0 || erroEmail.length > 0 || erroSenha.length > 0 || erroConfirmaSenha.length > 0) {
            setErro("*Existem campos inválidos")
            setTimeout(() => {
                setErro(" ")
            }, 2000)
        } else if (nome.length < 1 || email.length < 1 || senha.length < 1 || senhaConfirma.length < 1) {
            setErro("*Preencha os campos")
        } else {
            
            setTimeout(() => {
                navigation.goBack();
            }, 1000);
        }

    }

    return (
        <Background>
            <CardLogCad error={erro}>
                <View style={styles.inputsView}>
                    <LoginInput
                        iconName='user'
                        value={nome}
                        onChangeText={handleChangeNome}
                        password={false}
                        label='Nome'
                        error={erroNome}
                    />
                    <LoginInput
                        iconName='envelope'
                        value={email}
                        onChangeText={handleChangeEmail}
                        password={false}
                        label='Email'
                        error={erroEmail}
                    />
                    <LoginInput
                        iconName='key'
                        value={senha}
                        onChangeText={handleChangeSenha}
                        password={true}
                        label='Senha'
                        error={erroSenha}
                    />
                    <LoginInput
                        iconName='key'
                        value={senhaConfirma}
                        onChangeText={handleChangeSenhaConfirma}
                        password={true}
                        label='Confirmar senha'
                        error={erroConfirmaSenha}
                    />
                </View>
                <View style={styles.accessView}>
                    <ButtonAcess onPress={handlePressSubmit} imageSource={Cadastrar} estilo={styles.buttonImage} />
                </View>
            </CardLogCad>
        </Background>
    );
};