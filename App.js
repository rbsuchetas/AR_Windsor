import React, {Component} from 'react';
import LandingPage from './src/Components/LandingPage.js';
import RestaurantListScreen from './src/Components/RestaurantListScreen.js';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RestaurantListScreen />
    );
  }
}