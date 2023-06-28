import { StyleSheet } from "react-native";
import { Color } from "../COLOR/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: `${Color.branco}`,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    color: `${Color.branco}`,
    width: "88%",
    fontSize: 12,
  },
});

export default styles;
