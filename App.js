import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import House from './components/screens/House.js';
import Room from './components/screens/Room.js'
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen} = createNativeStackNavigator();

const Nav = () => {
  return (
    <Navigator>
      <Screen name="House" component={House} options={{headerStyle : {backgroundColor : "orange"}, title : "Maison"}}></Screen>
      <Screen name="Room" component={Room} options={({route}) => { return {title : route.params.todo.text, headerStyle : {backgroundColor : 'orange'}}}}></Screen>
    </Navigator>
  )
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Nav></Nav>
      </NavigationContainer>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
