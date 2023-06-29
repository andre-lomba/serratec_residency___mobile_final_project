import { StyleSheet } from "react-native";
import { Color } from "../../utils/COLOR/Colors";
import { Fontes } from "../../utils/Fonts/Fontes";

export const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#12100055",
  },
  container: {
    maxWidth: 300,
    backgroundColor: `${Color.preto}`,
    borderRadius: 15,
    padding: 20,
    paddingBottom: 30,
    alignItems: "center",
    gap: 10,
    borderColor: `${Color.branco}`,
    borderWidth: 1,
    shadowColor: `${Color.branco}`,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  nome: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: `${Color.amarelo}`,
    fontFamily: `${Fontes.dosis400}`,
  },
  descricao: {
    fontSize: 13,
    textAlign: "center",
    color: `${Color.branco}`,
    fontFamily: `${Fontes.dosis400}`,
  },
  imagem: {
    width: 190,
    height: 190,
    borderColor: `${Color.branco}`,
    borderWidth: 1,
    borderRadius: 90,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 200,
  },
  link: {
    color: `${Color.branco}`,
    fontFamily: `${Fontes.dosis400}`,
  },
  comprar: {
    width: 120,
    height: 30,
    tintColor: `${Color.vermelho}`,
  },
});
