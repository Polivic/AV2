import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Alert, Platform } from "react-native";
import { Card, Text, FAB, IconButton } from "react-native-paper";
import { useRouter } from "expo-router";

import alunoService, { Aluno } from "../../scripts/alunoService";

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const carregarAlunos = async () => {
    setLoading(true);
    try {
      const lista = await alunoService.listar();
      setAlunos(lista);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarAlunos();
  }, []);

  // 🔥 Função de excluir funcionando 100%
  const handleDelete = (id: number) => {
    // 👉 Caso esteja rodando na WEB, usa confirm()
    if (Platform.OS === "web") {
      const confirmar = window.confirm("Deseja realmente excluir este aluno?");
      if (confirmar) {
        (async () => {
          await alunoService.excluir(id);
          await carregarAlunos(); // garante atualização imediata
        })();
      }
      return;
    }

    // 👉 Caso seja Android / iOS
    Alert.alert(
      "Excluir Aluno",
      "Deseja realmente excluir este aluno?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            await alunoService.excluir(id);
            await carregarAlunos(); // garante atualização imediata
          },
        },
      ]
    );
  };

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id?.toString() ?? ""}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 12 }}>
            <Card.Title
              title={item.nome}
              subtitle={`Curso: ${item.curso} | Turma: ${item.turma}`}
            />

            <Card.Content>
              <Text>Matrícula: {item.matricula}</Text>
            </Card.Content>

            <Card.Actions style={{ justifyContent: "flex-end" }}>
              {/* Botão EDITAR */}
              <IconButton
                icon="pencil"
                iconColor="#1976d2"
                size={26}
                onPress={() => router.push(`/alunos/${item.id}` as never)}
              />

              {/* Botão EXCLUIR (corrigido) */}
              <IconButton
                icon="delete"
                iconColor="#d32f2f"
                size={26}
                onPress={() => handleDelete(item.id!)}
              />
            </Card.Actions>
          </Card>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Nenhum aluno cadastrado.
          </Text>
        }
      />

      {/* Botão flutuante */}
      <FAB
        icon="plus"
        style={{
          position: "absolute",
          right: 16,
          bottom: 16,
          backgroundColor: "#1976d2",
        }}
        onPress={() => router.push("/alunos/novo" as never)}
        color="#fff"
      />
    </View>
  );
}
