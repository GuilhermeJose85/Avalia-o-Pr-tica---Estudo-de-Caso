import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';

import Estatisticas from '../components/Estatisticas';

export default function Detalhes({ route }) {
  const { jogo } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: jogo.imagem }}
        style={styles.imagem}
      />

      <Text style={styles.nome}>
        {jogo.nome}
      </Text>

      <Text style={styles.texto}>
        🎮 Categoria: {jogo.categoria}
      </Text>

      <Text style={styles.texto}>
        💻 Plataforma: {jogo.plataforma}
      </Text>

      <Text style={styles.texto}>
        📅 Data: {jogo.data}
      </Text>

      <Text style={styles.descricao}>
        {jogo.descricao}
      </Text>

      <Estatisticas />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0F172A'
  },

  imagem: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 15
  },

  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10
  },

  texto: {
    color: '#E2E8F0',
    fontSize: 16,
    marginBottom: 8
  },

  descricao: {
    color: '#CBD5E1',
    fontSize: 16,
    marginTop: 10
  }
});