/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import AppPro from './App';

import {name as appName} from './app.json';
import AppP from './components/AppP';

AppRegistry.registerComponent(appName, () => AppP);
