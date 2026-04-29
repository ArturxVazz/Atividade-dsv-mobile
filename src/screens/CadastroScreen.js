import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');

  const salvarDados = async () => {
    try {
      const dadosAtuais = await AsyncStorage.getItem('@meus_dados');
      let lista = dadosAtuais ? JSON.parse(dadosAtuais) : [];
      
      lista.push({ id: Date.now().toString(), nome });
      await AsyncStorage.setItem('@meus_dados', JSON.stringify(lista));
      
      Alert.alert('Sucesso', 'Salvo na base de dados!');
      navigation.navigate('Lista');
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Digite algo para salvar" 
        value={nome} 
        onChangeText={setNome} 
      />
      <Button title="Gravar na Base e Listar" onPress={salvarDados} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 5 }
});