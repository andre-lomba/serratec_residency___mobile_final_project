import React, { useState, useEffect, useContext } from "react";
import { Text, FlatList } from "react-native";
import Background from "../../components/Background";
import CardHome from "../../components/CardHome";
import { PersonagemProps, getPersonagens } from "../../services/api/apiMarvel";
import { PersonagensContext } from "../../context/PersonagensContext";
import PersonagemHome from "../../components/PersonagemHome";
import Pesquisa from "../../components/Pesquisa";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootDrawerParamList } from "../../routes/DrawerNavigation";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getData } from "../../services/asyncStorage";
import { LoginScreenNavigationProp } from "../Login";
import styles from "./styles";

export default function Home() {
  const { personagens, setPersonagens } = useContext(PersonagensContext);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<LoginScreenNavigationProp>()

  useFocusEffect(() => {
    let usuario: any = {};
    getData("user").then((user) => usuario = user.id)
    if (!usuario) {
      navigation.navigate('Login')
    }
  })

  useEffect(() => {
    setPersonagensContext();
  }, []);

  const setPersonagensContext = async () => {
    await getPersonagens().then((res) => setPersonagens(res));
    setLoading(false);
  };

  if (loading) {
    return (
      <Background>
        <></>
      </Background>
    );
  } else {
    return (
      <Background color>
        <CardHome>
          <Text style={styles.text}>𝑫𝒆𝒔𝒑𝒆𝒓𝒕𝒆 𝒐 𝒉𝒆𝒓𝒐́𝒊 𝒆𝒎 𝒗𝒐𝒄𝒆̂ 𝒄𝒐𝒎 𝒏𝒐𝒔𝒔𝒐 𝒂𝒑𝒑, 𝒂𝒅𝒊𝒄𝒊𝒐𝒏𝒆 𝒔𝒆𝒖𝒔 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒈𝒆𝒏𝒔 𝒂́ 𝒃𝒊𝒃𝒍𝒊𝒐𝒕𝒆𝒄𝒂 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒐𝒔 𝒆 𝒂𝒄𝒆𝒔𝒔𝒆 𝒒𝒖𝒂𝒏𝒅𝒐 𝒒𝒖𝒊𝒔𝒆𝒓.
            𝑽𝒊𝒗𝒂 𝒂 𝒆𝒎𝒐𝒄̧𝒂̃𝒐 𝒅𝒂𝒔 𝒂𝒗𝒆𝒏𝒕𝒖𝒓𝒂𝒔 𝒆́𝒑𝒊𝒄𝒂𝒔 𝒅𝒐𝒔 𝒔𝒖𝒑𝒆𝒓-𝒉𝒆𝒓𝒐́𝒊𝒔 𝒅𝒂 𝑴𝒂𝒓𝒗𝒆𝒍!</Text>
          <Pesquisa />
          <FlatList
            data={personagens}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <PersonagemHome personagem={item} />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
          />
        </CardHome>
      </Background>
    );
  }
}
