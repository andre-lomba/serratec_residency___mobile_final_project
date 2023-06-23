import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
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
  inputsView: {
    height: 95,
    justifyContent: "space-between",
    width: "100%",
  },
  accessView: {
    height: 120,
    gap: 12,
  },
});

export default styles;