import { StyleSheet } from "react-native";
import { Color } from "../../components/COLOR/Colors";
import { Fontes } from "../../components/Fonts/Fontes";

const styles = StyleSheet.create({
  title:{
    color: `${Color.branco}`,
    fontSize: 18,
    textAlign:"center",
    fontFamily: `${Fontes.dosis600}`
  },
  text: {
    color: `${Color.branco}`,
    fontSize: 14,
    textAlign:"center",
    fontFamily: `${Fontes.dosis400}`
  },
  logo:{
    width:150,
    height:60
  },
  erroSearch:{
    color:`${Color.branco}`,
    fontSize: 16,
  },
});

export default styles;
