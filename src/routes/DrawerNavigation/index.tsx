import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/Home';
import 'react-native-gesture-handler';
import Usuario from '../../screens/Usuario';
import { Feather } from '@expo/vector-icons';
import styleDrawer from './styles';


const Drawer = createDrawerNavigator<RootDrawerParamList>();

export type RootDrawerParamList = {
    Home: undefined
    Usuario: undefined
};


export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
            useLegacyImplementation
            screenOptions={styleDrawer}>
            <Drawer.Screen name='Home' component={Home} options={{
                drawerIcon: ({ focused }) => (
                    <Feather
                        name="home"
                        size={24}
                        color={focused ? 'white' : 'black'}
                    />
                )
            }} />
            <Drawer.Screen name='Usuario' component={Usuario} options={{
                drawerIcon: ({ focused }) => (
                    <Feather
                        name="user"
                        size={24}
                        color={focused ? 'white' : 'black'}
                    />
                )
            }} />
        </Drawer.Navigator>
    )
}