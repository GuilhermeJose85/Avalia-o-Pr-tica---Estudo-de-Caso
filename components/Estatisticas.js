import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Alert,
} from "react-native";

export default function Estatisticas() {
  const [curtidas, setCurtidas] = useState(0);
  const [comentarios, setComentarios] = useState(0);
  const [favorito, setFavorito] = useState(false);
  const [texto, setTexto] = useState("");

  function comentar() {
    if (texto.trim() === "") {
      return;
    }

    setComentarios(comentarios + 1);
    setTexto("");

    Alert.alert(
      "Sucesso",
      "Comentário enviado!"
    );
  }

  return (
    <View>
      <Text>Curtidas: {curtidas}</Text>
      <Text>Comentários: {comentarios}</Text>
      <Text>
        Favorito: {favorito ? "⭐ Sim" : "Não"}
      </Text>

      <Button
        title="Curtir"
        onPress={() =>
          setCurtidas(curtidas + 1)
        }
      />

      <Button
        title="Descurtir"
        onPress={() =>
          setCurtidas(
            curtidas > 0 ? curtidas - 1 : 0
          )
        }
      />

      <Button
        title="Favoritar"
        onPress={() =>
          setFavorito(!favorito)
        }
      />

      <TextInput
        placeholder="Digite um comentário"
        value={texto}
        onChangeText={setTexto}
      />

      <Button
        title="Enviar Comentário"
        onPress={comentar}
      />
    </View>
  );
}