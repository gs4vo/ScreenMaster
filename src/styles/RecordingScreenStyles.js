import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#8B949E',
  },
  itemContainer: {
    backgroundColor: '#161B22',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#30363D'
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C9D1D9'
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
    backgroundColor: '#21262D',
  },
  deleteButton: {
    backgroundColor: '#DA3633',
  },
  itemButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});