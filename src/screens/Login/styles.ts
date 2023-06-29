import { StyleSheet } from "react-native";
import { Color } from "../../utils/COLOR/Colors";

const styles = StyleSheet.create({
  inputsView: {
    width: "100%",
    gap: 20,
  },
  accessView: {
    height: 120,
    gap: 12,
  },
  buttonImage: {
    width: 200,
    height: 54,
    tintColor:`${Color.vermelho}`
  },
});

export default styles;
