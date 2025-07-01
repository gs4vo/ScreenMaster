import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 2, // Sombra para Android
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPath: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginVertical: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  itemButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  playButton: {
    backgroundColor: '#007bff', // Azul
  },
  deleteButton: {
    backgroundColor: '#dc3545', // Vermelho
  },
  itemButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});