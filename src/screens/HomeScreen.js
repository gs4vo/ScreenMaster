import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { startRecording, stopRecording } from '../services/recordingService';

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

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f0f0f0' },
  statusText: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#333' },
  button: { alignItems: 'center', justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 32, borderRadius: 8, elevation: 3 },
  buttonStart: { backgroundColor: '#28a745' },
  buttonStop: { backgroundColor: '#dc3545' },
  buttonSecondary: { backgroundColor: '#6c757d' },
  buttonText: { fontSize: 16, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25, color: 'white' },
  separator: { height: 20 },
});

export default HomeScreen;