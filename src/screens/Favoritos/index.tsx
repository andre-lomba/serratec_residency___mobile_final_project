import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Background from "../../components/Background";
import CardHome from "../../components/CardHome";
import { PersonagemProps, UserProps, getPersonagem, getUser } from "../../services/api/apiMarvel";
import { getData } from "../../services/asyncStorage";
import { FlatList } from "react-native-gesture-handler";
import PersonagemHome from "../../components/PersonagemHome";



export default function Favorito() {
  const [usuario, setUsuario] = useState<UserProps>()
  const [loading, setLoading] = useState<boolean>(true)
  const [favoritos, setFavoritos] = useState<PersonagemProps[]>([])

  useEffect(() => {
    handleGetUser();
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!loading) {
      handleGetFavoritos();
    }
  }, [usuario])

  useEffect(() => {
    if (!loading) {
      console.log(favoritos)
    }
  }, [favoritos])

  const handleGetFavoritos = async () => {
    try {
      const updatedFavoritos: PersonagemProps[] = [];

      for (const item of usuario?.favoritos || []) {
        const personagem: PersonagemProps = await getPersonagem(item);
        updatedFavoritos.push(personagem);
      }
      setFavoritos(prevFavoritos => [...prevFavoritos, ...updatedFavoritos]);
    } catch (error) {
      throw error;
    }
  }

  const handleGetUser = async () => {
    let id: number = 0;
    await getData("user").then((user) => id = user.id)
    await getUser(id).then((res) => setUsuario(res))
  }

  return (
    <Background>
      <CardHome>
        <Text style={{ color: "#fff" }}>Aqui estão os seus favoritos:</Text>
        <FlatList
          data={favoritos}
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
  )
}