import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View, Text } from 'react-native';
import {Provider as PaperProvider, Button} from 'react-native-paper';

export default function App() {
  return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
