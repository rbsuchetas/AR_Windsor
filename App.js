import 'react-native-gesture-handler';
import React, {Component} from 'react';
import LandingPage from './src/Components/LandingPage.js';
import RestaurantPage from './src/Components/RestaurantPage';
import MenuTest from './src/Components/MenuTest.js';
import EventsPage from './src/Components/EventsPage.js';
import TourismPage from './src/Components/TourismPage.js';

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
        <Stack.Screen name="Restaurant" component={RestaurantPage} />
         <Stack.Screen name="menu" component={MenuTest} />
         <Stack.Screen name="Event" component={EventsPage} />
         <Stack.Screen name="Tourism" component={TourismPage} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}