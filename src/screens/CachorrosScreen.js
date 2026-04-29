import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, ActivityIndicator } from 'react-native';

export default function CachorrosScreen() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);

  const buscarCachorro = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.thedogapi.com/v1/images/search?has_breeds=1');
      const json = await response.json();
      const dog = json[0];

      // Verificação de segurança para evitar o erro de 'undefined'
      const racaInfo = dog.breeds && dog.breeds.length > 0 ? dog.breeds[0] : null;

      setDados({
        raca: racaInfo ? racaInfo.name : "Raça Desconhecida",
        temperamento: racaInfo ? racaInfo.temperament : "Amigável",
        imagem: dog.url
      });
    } catch (error) {
      console.error('Erro ao buscar cachorro:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarCachorro();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Doguinho do Dia</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color="#0066cc" />
      ) : (
        dados && (
          <View style={styles.card}>
            <Image source={{ uri: dados.imagem }} style={styles.imagem} />
            <Text style={styles.raca}>{dados.raca}</Text>
            <Text style={styles.info}>Temperamento: {dados.temperamento}</Text>
          </View>
        )
      )}

      <View style={styles.botaoContainer}>
        <Button title="Ver Outro Cachorro" onPress={buscarCachorro} color="#0066cc" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#f0f0f0' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  card: { alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 15, elevation: 5, width: '100%' },
  imagem: { width: '100%', height: 250, borderRadius: 10, marginBottom: 15 },
  raca: { fontSize: 22, fontWeight: 'bold', color: '#0066cc', marginBottom: 5 },
  info: { fontSize: 14, color: '#666', textAlign: 'center' },
  botaoContainer: { marginTop: 20, width: '100%' }
});