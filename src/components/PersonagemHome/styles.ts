import { StyleSheet } from "react-native";
import { Color } from "../COLOR/Colors";
import { Fontes } from "../../components/Fonts/Fontes";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    width: 130,
    height: 130,
    borderRadius:60,
    borderWidth:1,
    borderColor:`${Color.branco}`
  },
  text: {
    color: `${Color.amarelo}`,
    fontFamily:`${Fontes.dosis400}`,
    fontSize:15
  },
});

export default styles;
