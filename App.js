import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LandingPage from './src/Components/LandingPage.js';
import RestaurantListScreen from './src/Components/RestaurantListScreen.js';
import Menu1 from './src/Components/Menu1.js';



const RootStack = createStackNavigator(
  {
    LandingPage: LandingPage,
    Details: RestaurantListScreen,
	Menu1: Menu1
  },
  {
    initialRouteName: 'LandingPage',
  }
);



export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}