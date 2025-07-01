import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@ScreenMaster:recordings';

// --- FUNÇÕES SIMULADAS ---

export const startRecording = async () => {
  console.log('[SIMULADO] Gravação iniciada.');
  // Na versão real, aqui você chamaria a biblioteca de gravação.
  return Promise.resolve();
};

export const stopRecording = async () => {
  console.log('[SIMULADO] Gravação parada. Salvando metadados...');
  // Na versão real, a biblioteca de gravação retornaria o caminho do arquivo.
  const fakePath = `simulated/path/gravação_${Date.now()}.mp4`;
  await saveRecordingMetadata(fakePath);
  return { path: fakePath };
};

// --- FUNÇÕES DE ARMAZENAMENTO (JÁ FUNCIONAIS) ---

export const getRecordings = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    const data = jsonValue != null ? JSON.parse(jsonValue) : [];
    // Ordena do mais novo para o mais antigo
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

  // Mantém os itens existentes e adiciona o novo no início
  const updatedRecordings = [newRecording, ...currentRecordings];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecordings));
};

export const deleteRecording = async (id) => {
  try {
    const recordings = await getRecordings();
    const updatedRecordings = recordings.filter(rec => rec.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecordings));
    
    // Na versão real, aqui você usaria react-native-fs para deletar o arquivo físico.
    console.log(`[SIMULADO] Metadados da gravação ${id} deletados.`);
  } catch (e) {
    console.error('Erro ao deletar gravação', e);
  }
};