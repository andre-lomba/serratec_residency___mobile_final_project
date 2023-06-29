import { StyleSheet } from "react-native";
import { Color } from "../../utils/COLOR/Colors";

const styles = StyleSheet.create({
  card: {
    marginTop: 120,
    marginBottom: 60,
    width: "93%",
    height: "90%",
    borderRadius: 15,
    backgroundColor: `${Color.preto}`,
    justifyContent: "space-between",
    padding: 30,
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: `${Color.branco}`,
  },
});

export default styles;
