import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      
      <Button 
        title="Atividade 1 (Ir para Cadastro)" 
        onPress={() => navigation.navigate('Cadastro')} 
      />
      
      <View style={styles.espaco} />
      
      <Button 
        title="Atividade 2 (API de Cachorros)" 
        color="green"
        onPress={() => navigation.navigate('Cachorros')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 30, fontWeight: 'bold' },
  espaco: { height: 20 }
});
