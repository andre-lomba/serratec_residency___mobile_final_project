import * as React from "react";
import { createDrawerNavigator, } from "@react-navigation/drawer";
import Home from "../../screens/Home";
import "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import Favoritos from "../../screens/Favoritos/index";
import { FontAwesome5 } from "@expo/vector-icons";
import { CustomDrawerContent } from "./CustomDrawerContent";
import styleDrawer from "./styles";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export type RootDrawerParamList = {
  Home: undefined;
  Favoritos: undefined;
};

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props}/>}
      screenOptions={styleDrawer}
      initialRouteName="Home"
    >
      <Drawer.Screen  name="Home" component={Home}
      options={{
        title:"Home",
        drawerIcon: ({focused}) => (
            <FontAwesome5
               name="spider"
               size={24}
               color={focused ? 'black' : 'white'}
            />
        )}}
        />
      <Drawer.Screen name="Favoritos" component={Favoritos}
       options={{
        title:"Favoritos",
        drawerIcon: ({focused}) => (
            <Feather
               name="heart"
               size={24}
               color={focused ? 'black' : 'white'}
            />
        )}}
      />
    </Drawer.Navigator>
  );
}
