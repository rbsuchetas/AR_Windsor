import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  StyleSheet,  Text,  View,  ScrollView,Button,
TouchableHighlight,TouchableOpacity,Image  
  } from 'react-native';

export default class RestaurantListScreen extends React.Component {
   state = {
      names: [
         {'name': 'Restaurant1', 'id': 1, 'img':require('./images/default.png')},
         {'name': 'Restaurant2', 'id': 2, 'img':require('./images/default.png')},
         {'name': 'Restaurant3', 'id': 3, 'img':require('./images/default.png')},
         {'name': 'Restaurant4', 'id': 4, 'img':require('./images/default.png')},
         {'name': 'Restaurant5', 'id': 5, 'img':require('./images/default.png')},
         {'name': 'Restaurant6', 'id': 6, 'img':require('./images/default.png')}
      ]
   }
   
   
   render(){
	     
      return (
	  <View>
                    {
                  this.state.names.map((item, index) => (
		<TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.props.navigation.push('Menu1')}>
    <Image 
     source={item.img}
     style={styles.ImageIconStyle}
    />
    <View style={styles.SeparatorLine} />
    <Text style={styles.TextStyle}> {item.name} </Text>
</TouchableOpacity>
		
                  ))
               }
           		       </View>
				 
      );
   }
}


const styles = StyleSheet.create ({
   item: {
	  flexDirection: 'row',
      //justifyContent: 'space-between',
	  height:75,
	  //textAlign: 'flex-end',
      alignItems: 'flex-end',
      padding: 60,
      margin: 60,
      borderColor: '#2a4944',
      borderWidth: 3,
      backgroundColor: '#d2f7f1'
   },
    container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
	height:85, 
	flexDirection: 'row',
    marginBottom: 1,
	marginTop:1,
	padding: 2,
    margin: 5,
	alignItems: 'flex-start',
    //backgroundColor: '#d2f7f1',
	},
  buttonText: {
    textAlign: 'center',
    padding: 20,
	color: 'black'
  },
  ImageIconStyle: {
   padding: 20,
   margin: 0,
   height: 80,
   width: 80,
   resizeMode : 'stretch',

},

TextStyle :{

  color: "black",
  marginBottom : 50,
  marginRight :0,
  alignSelf: 'flex-end',
  fontSize: 25
  
},

SeparatorLine :{

//backgroundColor : '#fff',
width: 0,
height: 80

}
});