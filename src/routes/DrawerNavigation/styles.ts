import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { Color } from "../../utils/COLOR/Colors";
import { Fontes } from "../../utils/Fonts/Fontes";

const styleDrawer: DrawerNavigationOptions = {
  drawerActiveTintColor: `${Color.preto}`,
  drawerInactiveTintColor: `${Color.branco}`,
  drawerActiveBackgroundColor: `${Color.branco}`,
  drawerInactiveBackgroundColor: `${Color.cinza}`,
  drawerLabelStyle: {
    fontFamily: `${Fontes.dosis600}`,
    width: 250,
  },
  drawerStyle: {
    backgroundColor: "#12002b",
    width: 230,
  },
  drawerItemStyle: {
    width: "90%",
  },
  headerTransparent: true,
  headerTintColor: `${Color.branco}`,
  headerTitle: "",
};

export default styleDrawer;
