import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import ListaScreen from '../screens/ListaScreen';
import CachorrosScreen from '../screens/CachorrosScreen';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Lista" component={ListaScreen} />
        <Stack.Screen name="Cachorros" component={CachorrosScreen} options={{ title: 'Atividade 2' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}