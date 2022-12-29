import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Screen name = 'Home' component = {HomeScreen}/>
      <Stack.Screen name  = 'ISSLocation' component = {IssLocationScreen}/>
      <Stack.Screen name  = 'MeteorScreen' component = {MeteorScreen}/>
      <Stack.Screen name = 'UpdateScreen' component = {UpdateScreen}/>
    </NavigationContainer>
 
  );
}

export default App;