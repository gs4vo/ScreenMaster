import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, Pressable, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getRecordings, deleteRecording } from '../services/recordingService';
import styles from '../styles/RecordingScreenStyles';

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
    Alert.alert('Reproduzir Vídeo', `Implementar player de video:\n\n${item.path}`);
  };

  const handleDelete = (id) => {
    Alert.alert('Confirmar Exclusão', 'Deseja realmente deletar esta gravação?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Deletar', style: 'destructive', onPress: async () => { await deleteRecording(id); loadRecordings(); } },
    ]);
  };

  // Gravações da lista
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        Data: {new Date(item.createdAt).toLocaleString('pt-BR')}
      </Text>
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

export default RecordingsScreen;