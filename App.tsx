import React from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routes/StackNavigation';
import { PersonagensProvider } from './src/context/PersonagensContext';
import {
  useFonts,
  Dosis_400Regular,
  Dosis_600SemiBold
} from '@expo-google-fonts/dosis'
import AppLoading from "expo-app-loading";
import { UserProvider } from './src/context/UserContext';

export default function App() {
  const [fontsLoading] = useFonts({ Dosis_400Regular, Dosis_600SemiBold })

  if (!fontsLoading) {
    <AppLoading />
  } else
    return (
      <NavigationContainer>
        <StatusBar hidden={false} translucent={true} style="light" />
        <UserProvider>
          <PersonagensProvider>
            <StackNavigation />
          </PersonagensProvider>
        </UserProvider>
      </NavigationContainer>
    );
}
