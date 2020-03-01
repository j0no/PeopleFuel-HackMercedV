import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Home from './screens/Home';
import AddItemModal from './screens/AddItemModal';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const MainTabs = () => {
  return <Tab.Navigator>
    <Tab.Screen
      name='Home'
      component={Home}
      options={{ title: 'Home' }}
    />
    <Tab.Screen name='Profile' component={Profile} />
  </Tab.Navigator>
}


const RootStackScreen = () => {
  return <RootStack.Navigator mode="modal">
    <RootStack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name="Main"
      component={MainTabs}
      options={{ headerShown: false }}
    />
    <RootStack.Screen name="MyModal" component={AddItemModal} options={{ headerShown: false }}/>
  </RootStack.Navigator>
}

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  // <Login login = { () => { setIsAuth(true) } } />
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
