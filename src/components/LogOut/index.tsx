import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import LoginInput from "../../components/LoginInput";
import ButtonAcess from "../../components/Button/ButtonAcess";
import { LoginText } from "../../components/LoginText";
import Acessar from "../../assets/images/ACESSAR.png";
import CardLogCad from "../../components/CardLogCad";
import Background from "../../components/Background";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/StackNavigation";
import { UserProps, login } from "../../services/api/apiMarvel";
import { getData, storeData } from "../../services/asyncStorage";
import {removeData} from "../../services/asyncStorage/index"

const [erro, setErro] = useState<string>("");
const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

export const LogOut = () => {
    const handlePressLogOut = async () => {
        try {
          const user: UserProps = (await login(email, senha)).user;
          removeData("user");
        
        } catch (error) {
          setErro("erro");
          return;
        }
        setErro(" ");
      };

    return(
        <View>
            <TouchableOpacity> 
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}