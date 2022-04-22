import House from './components/screens/House.js';
import Room from './components/screens/Room.js'
import Furniture from './components/screens/Furniture.js'
import ObjectDescription from './components/screens/ObjectDescription.js'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchScreen from './components/screens/SearchItems';
import ListScreen from './components/screens/ListItems';

const { Navigator, Screen} = createNativeStackNavigator();

const Nav = () => {
  return (
    <Navigator>
      <Screen name="House" component={House} options={{headerStyle : {backgroundColor : "orange"}, title : "Maison"}}></Screen>
      <Screen name="Room" component={Room} options={({route}) => { return {title : route.params.todo.text, headerStyle : {backgroundColor : 'orange'}}}}></Screen>
      <Screen name="Furniture" component={Furniture} options={({route}) => { return {title : route.params.todo.text, headerStyle : {backgroundColor : 'orange'}}}}></Screen>
      <Screen name="ObjectDescription" component={ObjectDescription} options={({route}) => { return {title : route.params.todo.text, headerStyle : {backgroundColor : 'orange'}}}}></Screen>
    </Navigator>
  )
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search-sharp' : 'ios-search-outline';
            } else if (route.name === 'List') {
              iconName = focused ? 'ios-list-sharp' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'royalblue',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={Nav} onPress={() => navigation.navigate('Home')} />
        <Tab.Screen name="Search" component={SearchScreen} onPress={() => navigation.navigate('SearchItems')}/>
        <Tab.Screen name="List" component={ListScreen} onPress={() => navigation.navigate('ListItems')} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
