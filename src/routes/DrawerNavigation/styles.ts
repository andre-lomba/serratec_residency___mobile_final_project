import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { Color } from "../../components/COLOR/Colors";
import { Fontes } from "../../components/Fonts/Fontes";

const styleDrawer: DrawerNavigationOptions = {
  drawerActiveTintColor: `${Color.preto}`,
  drawerInactiveTintColor: `${Color.branco}`,
  drawerActiveBackgroundColor: `${Color.branco}`,
  drawerInactiveBackgroundColor: `${Color.cinza}`,
  drawerLabelStyle:{
    fontFamily:`${Fontes.dosis400}`
  },
  drawerStyle: {
    backgroundColor: "#1a1a1a",
    width: 200,

  },
  headerTransparent: true,
  headerTintColor: `${Color.branco}`,
  headerTitle: "",
  headerStyle:{
    // height:10
  },
};

export default styleDrawer;
