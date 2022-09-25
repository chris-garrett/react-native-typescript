import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Screens/Home';
import Stackable from "./Screens/Stackable";
import {Colors} from "./theme";
import {View} from "react-native";

const Stack = createStackNavigator();

const linking = {
  prefixes: ['http://whatever.com', 'what://'],
  config: {
    screens: {
      Home: '',
      Stack: "/stack"
    }
  }
}

function App() {
  return (
    <View style={
      {
        flex: 1,
        backgroundColor: Colors.grosse4,
        borderWidth: 2,
        borderColor: 'pink',
      }}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Stackable" component={Stackable}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;