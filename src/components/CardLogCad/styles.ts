import { StyleSheet } from "react-native";
import { Color } from "../COLOR/Colors";

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 600,
    borderRadius: 15,
    backgroundColor: "#000",
    justifyContent: "space-between",
    padding: 40,
    alignItems: "center",
  },
  logo: {
    width: 125,
    height: 100,
  },
  erro: {
    color: `${Color.vermelho}`,
    fontSize: 18,
  },
  logoAndErroView: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default styles;
