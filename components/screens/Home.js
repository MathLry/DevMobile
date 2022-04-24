import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import SaveDATA from '../data/saveDATA.js';

export default function App() {
  return (
    <View>
        {/* <SaveDATA style={ styles.textScreen }/> */}
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