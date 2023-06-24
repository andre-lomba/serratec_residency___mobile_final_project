import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/Home';
import 'react-native-gesture-handler';


const Drawer = createDrawerNavigator<RootDrawerParamList>();

export type RootDrawerParamList = {
    Home: undefined
};

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name='Home' component={Home} />
        </Drawer.Navigator>
    )
}