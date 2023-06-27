import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/Home';
import 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import styleDrawer from './styles';
import Favoritos from '../../screens/Favoritos/index';
import { View, TextInput, TouchableOpacity, Text } from "react-native"

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export type RootDrawerParamList = {
    Home: undefined
    Usuario: undefined
    Favoritos: undefined
    Sair: undefined
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
            <Drawer.Screen name='Favoritos' component={Favoritos} options={{
                drawerIcon: ({ focused }) => (
                    <Feather
                        name="heart"
                        size={24}
                        color={focused ? 'white' : 'black'}
                    />
                )
            }} />
            {/* <Drawer.Screen name='Sair' component={Usuario} options={{
                drawerIcon: ({ focused }) => (
                    <Feather
                        name="log-out"
                        size={24}
                        color={"red"}
                    />
                )
            }} /> */}
            {/* <TouchableOpacity activeOpacity={0.7}> 
                <Text> Sair </Text>
            </TouchableOpacity> */}
        </Drawer.Navigator>
    )
}