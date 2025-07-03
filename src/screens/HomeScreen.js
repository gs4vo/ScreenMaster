import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native'; 
import { startRecording, stopRecording } from '../services/recordingService';
import styles from '../styles/HomeScreenStyles'; // A importação correta
import FeedbackModal from '../components/FeedbackModal';

const HomeScreen = ({ navigation }) => {
  const [isRecording, setIsRecording] = useState(false);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const showModal = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    setModalVisible(true);
  };

  const handleStart = async () => {
    setIsRecording(true);
    await startRecording();
  };

  const handleStop = async () => {
    await stopRecording();
    setIsRecording(false);
    showModal('Gravação Salva!', 'Sua gravação foi salva com sucesso.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        {isRecording ? 'Gravando...' : 'Pronto para gravar'}
      </Text>

      <Pressable
        style={[styles.button, isRecording ? styles.buttonStop : styles.buttonStart]}
        onPress={isRecording ? handleStop : handleStart}
      >
        <Text style={styles.buttonText}>{isRecording ? 'Parar Gravação' : 'Iniciar Gravação'}</Text>
      </Pressable>

      <View style={styles.separator} />

      <Pressable
        style={[styles.button, styles.buttonSecondary]}
        onPress={() => navigation.navigate('Recordings')}
      >
        <Text style={styles.buttonText}>Ver Minhas Gravações</Text>
      </Pressable>
      
      {}
      <FeedbackModal
        visible={modalVisible}
        title={modalTitle}
        message={modalMessage}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default HomeScreen;