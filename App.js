import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SomeComponent from './components/someComponent'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your apps!</Text>
      <StatusBar style="auto" />
      <SomeComponent />
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
