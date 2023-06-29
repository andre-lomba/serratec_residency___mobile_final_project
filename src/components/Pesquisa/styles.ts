import { StyleSheet } from "react-native";
import { Color } from "../../utils/COLOR/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 0.8,
    borderBottomColor: `${Color.branco}`,
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  labelAndErrorView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },
  error: {
    fontSize: 10.5,
    color: `${Color.vermelho}`,
  },
  input: {
    color: `${Color.branco}`,
    width: "85%",
    fontSize: 15,
    textDecorationLine: "none",
  },
  lupa: {
    paddingBottom: 10,
  },
});

export default styles;
