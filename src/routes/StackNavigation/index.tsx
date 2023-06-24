import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Cadastro from '../../screens/Cadastro';
import DrawerNavigation from '../DrawerNavigation';
import 'react-native-gesture-handler';


const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    Home: undefined
};

export default function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Cadastro' component={Cadastro} />
            <Stack.Screen name='Home' component={DrawerNavigation} />
        </Stack.Navigator>
    )
}