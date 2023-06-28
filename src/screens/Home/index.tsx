import React, { useState, useEffect, useContext } from "react";
import { Text, FlatList, Image, View, BackHandler, AppState } from "react-native";
import Background from "../../components/Background";
import CardHome from "../../components/CardHome";
import { getPersonagens, getUser } from "../../services/api/apiMarvel";
import { PersonagensContext } from "../../context/PersonagensContext";
import PersonagemHome from "../../components/PersonagemHome";
import Pesquisa from "../../components/Pesquisa";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getData } from "../../services/asyncStorage";
import { LoginScreenNavigationProp } from "../Login";
import styles from "./styles";
import Logo from "../../assets/images/logo.png"
import { UserContext } from "../../context/UserContext";

export default function Home() {
  const { personagens, setPersonagens } = useContext(PersonagensContext);
  const { user, setUser } = useContext(UserContext)
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<LoginScreenNavigationProp>();

  useEffect(() => {
    setUserContext();
    setPersonagensContext();
  }, []);

  useFocusEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      backHandler.remove();
    }
  })

  const backAction = () => {
    if (user.id > 0) {
      AppState.currentState !== 'background' ? BackHandler.exitApp() : null;
      return true;
    }
    return false;
  };

  const setUserContext = async () => {
    await getData("user")
      .then((element) => {
        getUser(element.id)
          .then(usuario => setUser(usuario))
      })
      .catch(error => navigation.navigate('Login'))
  }

  const setPersonagensContext = async () => {
    await getPersonagens().then((res) => setPersonagens(res));
    setLoading(false);
  };

  if (loading) {
    return (
      <Background color="red">
        <></>
      </Background>
    );
  } else {
    return (
      <Background color="red">
        <CardHome>
          <Image source={Logo} style={styles.logo} />
          <View>
            <Text style={styles.title}>Desperte o herói em você!</Text>
            <Text style={styles.text}>Adicione seus personagens aos Favoritos e acesse quando quiser!
              Viva a emoção das aventuras épicas dos super-heróis da Marvel!</Text>
          </View>

          <Pesquisa />
          {personagens.length < 1 && <Text style={styles.erroSearch}>Pesquisa sem resultados :(</Text>}
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
        {/* <LogOut /> */}
      </Background>
    );
  }
}
