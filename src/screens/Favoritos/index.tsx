import React, { useState, useContext } from "react";
import { FavoritosContext } from "../../../context/FavoritosContext";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

export const Favoritos = () => {
  const [indexSelecionado, setIndexSelecionado] = useState<string>("");

  const { listaComics, handleRemoveComics } = useContext(FavoritosContext);

  return (
    <View>
      <Text>Favoritos</Text>
      <FlatList
        data={listaComics}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.descricao}</Text>
              <View>
                <TouchableOpacity onPress={() => handleRemoveComics(item.id)}>
                  <Text> Remover dos favoritos</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
