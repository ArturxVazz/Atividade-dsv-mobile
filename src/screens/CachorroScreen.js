import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, ActivityIndicator } from 'react-native';

export default function CachorrosScreen() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);

  // Função para buscar as INFORMAÇÕES e IMAGEM na API
  const buscarPessoaNaApi = async () => {
    setLoading(true);
    try {
      // Fazendo a requisição para a API escolhida
      const response = await fetch('https://randomuser.me/api/');
      const json = await response.json();
      
      // Acessando os dados que a API retornou (ela devolve um array chamado 'results')
      const pessoa = json.results[0];
      
      // Salvando as informações e a imagem no nosso estado
      setDados({
        nome: `${pessoa.name.first} ${pessoa.name.last}`,
        email: pessoa.email,
        pais: pessoa.location.country,
        imagem: pessoa.picture.large
      });
    } catch (error) {
      console.error('Erro ao buscar a API:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarPessoaNaApi();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil Gerado via API</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        dados && (
          <View style={styles.card}>
            {/* Exibindo a IMAGEM */}
            <Image 
              source={{ uri: dados.imagem }} 
              style={styles.imagem} 
              resizeMode="cover"
            />
            
            {/* Exibindo as INFORMAÇÕES */}
            <Text style={styles.nome}>{dados.nome}</Text>
            <Text style={styles.info}>{dados.email}</Text>
            <Text style={styles.info}>{dados.pais}</Text>
          </View>
        )
      )}

      <View style={styles.botaoContainer}>
        <Button title="Gerar Novo Perfil" onPress={buscarPessoaNaApi} color="#0066cc" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: { alignItems: 'center', backgroundColor: '#fff', padding: 20, borderRadius: 10, elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, width: '100%' },
  imagem: { width: 150, height: 150, borderRadius: 75, marginBottom: 15 },
  nome: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  info: { fontSize: 16, color: '#555', marginBottom: 5 },
  botaoContainer: { marginTop: 20, width: '100%' }
});