import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RecordingsScreen from '../screens/RecordingsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#3498db' }, headerTintColor: '#fff' }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'ScreenMaster' }}
        />
        <Stack.Screen
          name="Recordings"
          component={RecordingsScreen}
          options={{ title: 'Lista de Gravações' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;