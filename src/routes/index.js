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
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Esconde a barra no login se desejar
        />
        <Stack.Screen 
          name="Cadastro" 
          component={CadastroScreen} 
          options={{ title: 'Novo Cadastro' }} 
        />
        <Stack.Screen 
          name="Lista" 
          component={ListaScreen} 
          options={{ title: 'Usuários Cadastrados' }} 
        />
        <Stack.Screen 
          name="Cachorros" 
          component={CachorrosScreen} 
          options={{ title: 'Consumo de API (Atividade 2)' }} // Muda o título lá no topo
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}