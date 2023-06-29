import { StyleSheet } from "react-native";
import { Color } from "../../utils/COLOR/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${Color.preto}`,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
