import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@ScreenMaster:recordings';


export const startRecording = async () => {
  console.log('Gravação iniciada.');
  return Promise.resolve();
};

export const stopRecording = async () => {
  console.log('Gravação parada. Salvando metadados...');
  const fakePath = `simulated/path/gravação_${Date.now()}.mp4`;
  await saveRecordingMetadata(fakePath);
  return { path: fakePath };
};


export const getRecordings = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    const data = jsonValue != null ? JSON.parse(jsonValue) : [];
    return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } catch (e) {
    console.error('Erro ao buscar gravações', e);
    return [];
  }
};

const saveRecordingMetadata = async (path) => {
  const currentRecordings = await getRecordings();
  const newRecording = {
    id: Date.now().toString(),
    path: path,
    createdAt: new Date().toISOString(),
  };

  const updatedRecordings = [newRecording, ...currentRecordings];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecordings));
};

export const deleteRecording = async (id) => {
  try {
    const recordings = await getRecordings();
    const updatedRecordings = recordings.filter(rec => rec.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecordings));
    
    console.log(`Metadados da gravação ${id} deletados.`);
  } catch (e) {
    console.error('Erro ao deletar gravação', e);
  }
};