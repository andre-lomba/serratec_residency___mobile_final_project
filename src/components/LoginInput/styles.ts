import { StyleSheet } from "react-native";
import { Color } from "../COLOR/Colors";

const styles = StyleSheet.create({
  container: {
    gap: 3,
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
  label: {
    color: `${Color.amarelo}`,
  },
  line: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#fff",
    width: "100%",
    alignItems: "center",
    columnGap: 10,
  },
  input: {
    color: "#fff",
    width: "75%",
    fontSize: 12,
  },
});

export default styles;
