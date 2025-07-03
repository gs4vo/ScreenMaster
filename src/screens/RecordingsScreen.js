import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getRecordings, deleteRecording } from '../services/recordingService';
import styles from '../styles/RecordingScreenStyles';
import FeedbackModal from '../components/FeedbackModal';
import ConfirmationModal from '../components/ConfirmationModal';

const RecordingsScreen = () => {
  const [recordings, setRecordings] = useState([]);
  
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [feedbackModalMessage, setFeedbackModalMessage] = useState('');

  const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);
  const [selectedRecordingId, setSelectedRecordingId] = useState(null);

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
    setFeedbackModalMessage(`Iniciar player de vídeo:\n\n${item.path}`);
    setFeedbackModalVisible(true);
  };

  const handleDeletePress = (id) => {
    setSelectedRecordingId(id);
    setConfirmationModalVisible(true);
  };

  const confirmDelete = async () => {
    if (selectedRecordingId) {
      await deleteRecording(selectedRecordingId);
      loadRecordings();
    }
    setConfirmationModalVisible(false);
    setSelectedRecordingId(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        Data: {new Date(item.createdAt).toLocaleString('pt-BR')}
      </Text>
      <View style={styles.buttonsContainer}>
        <Pressable style={[styles.itemButton, styles.playButton]} onPress={() => handlePlay(item)}>
          <Text style={styles.itemButtonText}>Reproduzir</Text>
        </Pressable>
        {}
        <Pressable style={[styles.itemButton, styles.deleteButton]} onPress={() => handleDeletePress(item.id)}>
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

      {}
      <FeedbackModal
        visible={feedbackModalVisible}
        title="Reproduzir Vídeo"
        message={feedbackModalMessage}
        onClose={() => setFeedbackModalVisible(false)}
      />
      
      {}
      <ConfirmationModal
        visible={confirmationModalVisible}
        title="Confirmar Exclusão"
        message="Deseja realmente deletar esta gravação?"
        onClose={() => setConfirmationModalVisible(false)}
        onConfirm={confirmDelete}
      />
    </View>
  );
};

export default RecordingsScreen;