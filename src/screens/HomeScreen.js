import React, { useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { startRecording, stopRecording } from '../services/recordingService';
import styles from '../styles/HomeScreenStyles'; // A importação correta

const HomeScreen = ({ navigation }) => {
  const [isRecording, setIsRecording] = useState(false);

  const handleStart = async () => {
    setIsRecording(true);
    await startRecording();
  };

  const handleStop = async () => {
    await stopRecording();
    setIsRecording(false);
    Alert.alert('Gravação Salva!', 'Sua gravação (simulada) foi salva com sucesso.');
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
    </View>
  );
};

export default HomeScreen;