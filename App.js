import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import House from './components/screens/House'
import HomeScreen from './components/screens/Home';
import SearchScreen from './components/screens/SearchItems';
import ListScreen from './components/screens/ListItems';

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
        <Tab.Screen name="Home" component={House} onPress={() => navigation.navigate('Home')} />
        <Tab.Screen name="Search" component={SearchScreen} onPress={() => navigation.navigate('SearchItems')}/>
        <Tab.Screen name="List" component={ListScreen} onPress={() => navigation.navigate('ListItems')} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
