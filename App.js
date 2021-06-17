import 'react-native-gesture-handler';
import React, { Component } from 'react';
import LandingPage from './src/Components/LandingPage.js';
import TestPage from './src/Components/TestPage';
import TestAr from './src/Components/TestAr.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={LandingPage}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Profile"
            component={TestPage}
            options={({ route }) => ({ title: route.params.title })}
          />
          <Stack.Screen
            name="AR"
            component={TestAr}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}