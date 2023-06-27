import React from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routes/StackNavigation';
import { PersonagensProvider } from './src/context/PersonagensContext';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={false} translucent={true} style="light" />
      <PersonagensProvider>
        <StackNavigation />
      </PersonagensProvider>
    </NavigationContainer>
  );
}
