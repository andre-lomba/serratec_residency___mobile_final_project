import { StyleSheet } from "react-native";
import { Color } from "../../components/COLOR/Colors";
import { Fontes } from "../../components/Fonts/Fontes";

export const styles = StyleSheet.create({
  backGround: {
    backgroundColor: `${Color.amarelo}`,
  },
  card: {
    width: "100%",
  },
  image: {
    width: 280,
    height: 70,
    tintColor: `${Color.vermelho}`,
  },
  msg: {
    color: "#fff",
    fontFamily: `${Fontes.dosis400}`,
    fontSize: 18,
  },
  text: {
    fontFamily: `${Fontes.dosis600}`,
    color: `${Color.preto}`,
  },
  limpar: {
    backgroundColor: `${Color.vermelho}`,
    borderWidth: 1,
    borderColor: `${Color.branco}`,
    borderRadius: 20,
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  bottom:{
    flexDirection:"row",
    columnGap:100
  }
});
