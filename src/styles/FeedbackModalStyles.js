import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: '#161B22',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#30363D',
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C9D1D9',
  },
  modalMessage: {
    marginBottom: 25,
    textAlign: 'center',
    color: '#8B949E',
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#238636',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});