import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/utils/Main';
import { Provider } from 'react-redux';
import store from './src/Redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Main />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  },
});
