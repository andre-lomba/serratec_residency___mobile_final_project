import { StyleSheet } from "react-native";
import { Color } from "../COLOR/Colors";

export const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#12100055",
  },
  container: {
    maxWidth: 300,
    backgroundColor: "grey",
    borderRadius: 15,
    padding: 20,
    paddingBottom: 30,
    alignItems: "center",
    justifyContent: "space-between",
    height: 500,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  nome: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  descricao: {
    fontSize: 12,
    textAlign: "center",
  },
  imagem: {
    width: 190,
    height: 190,
    borderColor: "black",
    borderWidth: 2,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap:200
  },
});
