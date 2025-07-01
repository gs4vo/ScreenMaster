/**
 * @format
 */

import { AppRegistry } from 'react-native';
// Importe o App a partir da pasta src
import App from './src/App'; 
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);