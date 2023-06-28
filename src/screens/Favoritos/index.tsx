import React, { useState, useEffect, useContext } from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import Background from "../../components/Background";
import CardHome from "../../components/CardHome";
import {
  PersonagemProps,
  cleanFav,
  getPersonagem,
  getUser,
} from "../../services/api/apiMarvel";
import { getData } from "../../services/asyncStorage";
import { FlatList } from "react-native-gesture-handler";
import PersonagemHome from "../../components/PersonagemHome";
import { UserContext } from "../../context/UserContext";
import Favoritos from "../../assets/images/favoritos.png"
import { styles } from "./style"
import { ButtonRedirect } from "../../components/ButtonRedirect";

export default function Favorito() {
  const [loading, setLoading] = useState<boolean>(true);
  const { user, setUser } = useContext(UserContext);
  const [favoritos, setFavoritos] = useState<PersonagemProps[]>([]);

  useEffect(() => {
    setUserContext();
  }, []);

  useEffect(() => {
    handleGetFavoritos();
  }, [user]);

  const setUserContext = async () => {
    await getData("user").then((element) => {
      getUser(element.id).then((usuario) => setUser(usuario));
    });
  };

  const handleGetFavoritos = async () => {
    try {
      const updatedFavoritos: PersonagemProps[] = [];

      for (const item of user.favoritos || []) {
        const personagem: PersonagemProps = await getPersonagem(item);
        updatedFavoritos.push(personagem);
      }
      setFavoritos(updatedFavoritos);
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  const handleLimpar = async () => {
    await cleanFav(user.id).then(usuario => setUser(usuario))
  }

  if (loading) {
    return (
      <Background color="yellow">
        <></>
      </Background>
    );
  } else
    return (
      <Background color="yellow">
        <CardHome>
          <Image style={styles.image} source={Favoritos} />
          {favoritos.length < 1 && <Text style={styles.msg}> Nenhum herói favorito ainda :(</Text>}
          <FlatList
            data={favoritos}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <PersonagemHome personagem={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <View style={styles.bottom}>
            {favoritos.length > 0 && <TouchableOpacity activeOpacity={0.7} onPress={handleLimpar} style={styles.limpar}>
              <Text style={styles.text}>LIMPAR TODOS</Text>
            </TouchableOpacity>}
            <ButtonRedirect activeOpacity={0.7}>
              <Text style={styles.text}>FANDOM</Text>
            </ButtonRedirect>
          </View>
        </CardHome>
      </Background>
    );
}
