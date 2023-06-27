import { StyleSheet } from "react-native";
import { Color } from "../COLOR/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 0.8,
    borderBottomColor: "#fff",
    width: "90%",
    justifyContent:"space-between",
    alignItems: "center",

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
    color: "#fff",
    width: "85%",
    fontSize: 15,
  },
});

export default styles;