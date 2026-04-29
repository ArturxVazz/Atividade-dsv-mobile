import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ListaScreen() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const buscarDados = async () => {
      const dadosArmazenados = await AsyncStorage.getItem('@meus_dados');
      if (dadosArmazenados) {
        setDados(JSON.parse(dadosArmazenados));
      }
    };
    buscarDados();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados do Banco:</Text>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  texto: { fontSize: 16 }
});