import { AppRegistry } from 'react-native';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import createEventHandler from './event-handler';


AppRegistry.registerComponent('testmusicplayer', () => App);
