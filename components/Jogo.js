import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Jogo({
  jogo,
  navigation
}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(
          'Detalhes',
          { jogo }
        )
      }
    >
      <View style={styles.card}>
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
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E293B',
    margin: 12,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5
  },

  imagem: {
    width: 220,
    height: 280,
    borderRadius: 12,
    marginBottom: 12
  },

  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8
  },

  texto: {
    color: '#CBD5E1',
    fontSize: 16
  }
});