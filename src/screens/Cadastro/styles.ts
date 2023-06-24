import { StyleSheet } from "react-native";
import { Color } from "../../components/COLOR/Colors";

const styles = StyleSheet.create({
  inputsView: {
    width: "100%",
    gap: 20,
  },
  accessView: {
    height: 120,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonImage: {
    width: 220,
    height: 45,
    tintColor:`${Color.amarelo}`
  },
});

export default styles;
