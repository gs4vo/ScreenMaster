// src/styles/HomeScreenStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#0D1117'
  },
  statusText: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 30, 
    color: '#C9D1D9'
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
    backgroundColor: '#238636'
  },
  buttonStop: { 
    backgroundColor: '#DA3633'
  },
  buttonSecondary: { 
    backgroundColor: '#21262D',
    borderWidth: 1,
    borderColor: '#30363D'
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