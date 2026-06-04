import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import Estatisticas from "./Estatisticas";

export default function Jogo(props) {
  const [mostrarDescricao, setMostrarDescricao] = useState(false);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: props.imagem }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>{props.nome}</Text>

      <Text>Categoria: {props.categoria}</Text>
      <Text>Plataforma: {props.plataforma}</Text>
      <Text>Data: {props.data}</Text>

      <Button
        title={
          mostrarDescricao
            ? "Ocultar Descrição"
            : "Mostrar Descrição"
        }
        onPress={() =>
          setMostrarDescricao(!mostrarDescricao)
        }
      />

      {mostrarDescricao && (
        <Text style={styles.descricao}>
          {props.descricao}
        </Text>
      )}

      <Estatisticas />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  imagem: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    resizeMode: "cover",
    marginBottom: 10,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  descricao: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 20,
  },
});