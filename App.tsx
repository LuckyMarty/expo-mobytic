import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RootNavigator } from './src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';




export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
