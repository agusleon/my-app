import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Screen from './Screens/MainScreen';

export default function App() {
  return (
    <PaperProvider>
      <Screen/>
    </PaperProvider>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hey bitch!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
