/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppState
} from 'react-native';
import { play, pause, add, configPlayer } from './player-commands';
import CurrentTrack from './currenttrack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import TrackPlayer from 'react-native-track-player';

import createEventHandler from './event-handler';


const store = createStore(reducers);


TrackPlayer.registerEventHandler(createEventHandler(store));

class App extends Component{
  static store = null;

  componentDidMount(){

    const track = {
      id: '12345',
      url: 'https://drive.google.com/uc?export=download&id=1bN_jKkCTDc8lCDFNb1NaEwZUx_eA7t8k',
      title: 'Brainbug',
      artist: 'Track Artist'
    };

    configPlayer().then(() => {
      add(track);
    });

  }
  
  render() {
    let bleh = "";
    if (store === null)
    {
      bleh = <Text>Null!</Text>;
    }
    else
    {
      bleh = <Text>Not Null!</Text>;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={pause}>
          Welcome to Music Player Native!
        </Text>
        <Text style={styles.instructions} onPress={play}>
          To get started, edit App.js
        </Text>
        <CurrentTrack store={store} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;