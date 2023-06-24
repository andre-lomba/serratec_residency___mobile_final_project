import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { Color } from "../../components/COLOR/Colors";

const styleDrawer: DrawerNavigationOptions = {
  drawerActiveTintColor: `${Color.branco}`,
  drawerActiveBackgroundColor: `${Color.cinza}`,
  drawerInactiveBackgroundColor: `${Color.branco}`,
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
