import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#f0f0f0' 
  },
  statusText: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 30, 
    color: '#333' 
  },
  button: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingVertical: 15, 
    paddingHorizontal: 32, 
    borderRadius: 8, 
    elevation: 3 
  },
  buttonStart: { 
    backgroundColor: '#28a745' 
  },
  buttonStop: { 
    backgroundColor: '#dc3545' 
  },
  buttonSecondary: { 
    backgroundColor: '#6c757d' 
  },
  buttonText: { 
    fontSize: 16, 
    lineHeight: 21, 
    fontWeight: 'bold', 
    letterSpacing: 0.25, 
    color: 'white' 
  },
  separator: { 
    height: 20 
  },
});