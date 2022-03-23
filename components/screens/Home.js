import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View>
        <Text style={styles.textScreen}>Home</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  textScreen: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
