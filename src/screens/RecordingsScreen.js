import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getRecordings, deleteRecording } from '../services/recordingService';

const RecordingsScreen = () => {
  const [recordings, setRecordings] = useState([]);

  const loadRecordings = async () => {
    const data = await getRecordings();
    setRecordings(data);
  };

  useFocusEffect(
    useCallback(() => {
      loadRecordings();
    }, [])
  );

  const handlePlay = (item) => {
    Alert.alert('Reproduzir Vídeo', `Aqui você implementaria o player de vídeo para o arquivo em:\n\n${item.path}`);
  };

  const handleDelete = (id) => {
    Alert.alert('Confirmar Exclusão', 'Deseja realmente deletar esta gravação?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Deletar', style: 'destructive', onPress: async () => { await deleteRecording(id); loadRecordings(); } },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        Data: {new Date(item.createdAt).toLocaleString('pt-BR')}
      </Text>
      <Text style={styles.itemPath} numberOfLines={1}>Caminho: {item.path}</Text>
      <View style={styles.buttonsContainer}>
        <Pressable style={[styles.itemButton, styles.playButton]} onPress={() => handlePlay(item)}>
          <Text style={styles.itemButtonText}>Reproduzir</Text>
        </Pressable>
        <Pressable style={[styles.itemButton, styles.deleteButton]} onPress={() => handleDelete(item.id)}>
          <Text style={styles.itemButtonText}>Deletar</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {recordings.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhuma gravação encontrada.</Text>
        </View>
      ) : (
        <FlatList
          data={recordings}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 18, color: '#888' },
  itemContainer: { backgroundColor: '#f9f9f9', padding: 15, marginVertical: 8, marginHorizontal: 16, borderRadius: 8, elevation: 2 },
  itemText: { fontSize: 16, fontWeight: 'bold' },
  itemPath: { fontSize: 12, color: '#666', fontStyle: 'italic', marginVertical: 5 },
  buttonsContainer: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 },
  itemButton: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 5, marginLeft: 10 },
  playButton: { backgroundColor: '#007bff' },
  deleteButton: { backgroundColor: '#dc3545' },
  itemButtonText: { color: 'white', fontWeight: 'bold' },
});

export default RecordingsScreen;