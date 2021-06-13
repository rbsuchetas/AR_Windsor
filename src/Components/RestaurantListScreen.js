import React, { Component } from 'react';
import {
  StyleSheet,  Text,  View,  ScrollView,
TouchableHighlight,TouchableOpacity,Image   
  } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 
 import {
    ViroARSceneNavigator
} from 'react-viro';

var sharedProps = {
  apiKey:"API_KEY_HERE",
}
 var Menu1 = require('./Menu1');
 var SELECT1 = "1";
  var SELECT2 = "2";
  var SELECT3 = "3";
  var SELECT4 = "4";
  var SELECT5 = "5";
  var SELECTDEF = "0";
 var defaultNavigatorType = "UNSET";
  var UNSET = "UNSET";
 

export default class App extends Component {
  constructor() {
    super();
	  this.state = {
      name1: [
         {'name': 'La Pizza', 'id': 1,'Region': ' Windsor, ON', 'img':require('./images/default.png')}],
	name2: [	 
         {'name': 'Le Habanero Shack', 'id': 2,'Region': ' Windsor, ON', 'img':{ uri: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2236%2Ftrend20200212115158.jpg'}}],
    name3: [
	{'name': 'The Grand Restaurant', 'id': 3,'Region': ' Windsor, ON', 'img':{ uri: 'https://media.architecturaldigest.com/photos/5f048166dacc8c38a6d65e41/16:9/w_2560%2Cc_limit/Oro_Bistrot_T_NH_collection-fori-imperiali_078.jpg'}}],
	name4: [
	 {'name': 'Burgerista', 'id': 4,'Region': ' Windsor, ON', 'img':{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmagicpin.in%2Fblog%2Fbest-restaurants-jaipur%2F&psig=AOvVaw0tpdzKMyVzgUsxVQmUC3M1&ust=1622786200022000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDe9-nj-vACFQAAAAAdAAAAABAI'}}],
	name5: [
	{'name': 'The Pink Square', 'id': 5,'Region': ' Windsor, ON', 'img':{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxDovIkV9ZOq4eeCgL3E1XdIE1MF9qplOWw&usqp=CAU'}}],
	name6: [    {'name': 'Restaurant7', 'id': 7,'Region': ' Windsor, ON', 'img':require('./images/default.png')}],
    name7: [     {'name': 'Restaurant8', 'id': 8,'Region': ' Windsor, ON', 'img':require('./images/default.png')}],
    name8: [     {'name': 'Restaurant9', 'id': 9,'Region': ' Windsor, ON', 'img':require('./images/default.png')}],
    name9: [     {'name': 'Restaurant10', 'id': 10,'Region': ' Windsor, ON', 'img':require('./images/default.png')}],
    name10: [     {'name': 'Restaurant11', 'id': 11,'Region': ' Windsor, ON', 'img':require('./images/default.png')}],
    name11: [   {'name': 'Restaurant12', 'id': 12,'Region': ' Windsor, ON', 'img':require('./images/default.png')}],
      	  navigatorType : defaultNavigatorType,
      sharedProps : sharedProps
      }
	   this._restaurantSelect = this._restaurantSelect.bind(this);
      this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
  this._getMenu1 = this._getMenu1.bind(this);
     }
   
	render() {
if (this.state.navigatorType == UNSET) {
      return this._restaurantSelect();
    } else if (this.state.navigatorType == SELECT1) {
      return this._getMenu1();
    } else if (this.state.navigatorType == SELECT2) {
      return this._getMenu2();
    }else if (this.state.navigatorType == SELECT3) {
      return this._getMenu3();
    }else if (this.state.navigatorType == SELECT4) {
      return this._getMenu4();
    }else if (this.state.navigatorType == SELECT5) {
      return this._getMenu5();
    }else if (this.state.navigatorType == SELECTDEF) {
      return this._getMenu();
    }
	;      
	}
 
 _restaurantSelect() {
 return (
   <View>
            <ScrollView>
               {
                  this.state.name1.map((item, index) => (
		<TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(SELECT1)}>
		<Image source={item.img}  style={styles.ImageIconStyle}/>
		 <View style={styles.SeparatorLine} />
    	 <Text style={styles.TextStyle}> {item.name}{"\n"} <Text style={styles.RegionStyle}> {item.Region}</Text></Text>
			</TouchableOpacity>		
			   ))}
			   {
				 this.state.name2.map((item, index) => (
		<TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(SELECT2)}>
		<Image source={item.img}  style={styles.ImageIconStyle}/>
		 <View style={styles.SeparatorLine} />
    	 <Text style={styles.TextStyle}> {item.name}{"\n"} <Text style={styles.RegionStyle}> {item.Region}</Text></Text>
			</TouchableOpacity>		
		                  ))
		                		  
               }
			    {
				 this.state.name3.map((item, index) => (
		<TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(SELECT3)}>
		<Image source={item.img}  style={styles.ImageIconStyle}/>
		 <View style={styles.SeparatorLine} />
    	 <Text style={styles.TextStyle}> {item.name}{"\n"} <Text style={styles.RegionStyle}> {item.Region}</Text></Text>
			</TouchableOpacity>		
		                  ))
		                		  
               }
			    {
				 this.state.name4.map((item, index) => (
		<TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(SELECT4)}>
		<Image source={item.img}  style={styles.ImageIconStyle}/>
		 <View style={styles.SeparatorLine} />
    	 <Text style={styles.TextStyle}> {item.name}{"\n"} <Text style={styles.RegionStyle}> {item.Region}</Text></Text>
			</TouchableOpacity>		
		                  ))
		                		  
               }
			    {
				 this.state.name5.map((item, index) => (
		<TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(SELECT5)}>
		<Image source={item.img}  style={styles.ImageIconStyle}/>
		 <View style={styles.SeparatorLine} />
    	 <Text style={styles.TextStyle}> {item.name}{"\n"} <Text style={styles.RegionStyle}> {item.Region}</Text></Text>
			</TouchableOpacity>		
		                  ))
		                		  
               }
			    {
				 this.state.name6.map((item, index) => (
		<TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(SELECTDEF)}>
		<Image source={item.img}  style={styles.ImageIconStyle}/>
		 <View style={styles.SeparatorLine} />
    	 <Text style={styles.TextStyle}> {item.name}{"\n"} <Text style={styles.RegionStyle}> {item.Region}</Text></Text>
			</TouchableOpacity>		
		                  ))
		                		  
               }
			    {
				 this.state.name7.map((item, index) => (
		<TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(SELECTDEF)}>
		<Image source={item.img}  style={styles.ImageIconStyle}/>
		 <View style={styles.SeparatorLine} />
    	 <Text style={styles.TextStyle}> {item.name}{"\n"} <Text style={styles.RegionStyle}> {item.Region}</Text></Text>
			</TouchableOpacity>		
		                  ))
		                		  
               }
			    {
				 this.state.name8.map((item, index) => (
		<TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(SELECTDEF)}>
		<Image source={item.img}  style={styles.ImageIconStyle}/>
		 <View style={styles.SeparatorLine} />
    	 <Text style={styles.TextStyle}> {item.name}{"\n"} <Text style={styles.RegionStyle}> {item.Region}</Text></Text>
			</TouchableOpacity>		
		                  ))
		                		  
               }
			    {
				 this.state.name9.map((item, index) => (
		<TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(SELECTDEF)}>
		<Image source={item.img}  style={styles.ImageIconStyle}/>
		 <View style={styles.SeparatorLine} />
    	 <Text style={styles.TextStyle}> {item.name}{"\n"} <Text style={styles.RegionStyle}> {item.Region}</Text></Text>
			</TouchableOpacity>		
		                  ))
		                		  
               }
            </ScrollView>
		       </View>
		);
			   }
 
   
_getMenu1() {
    return (  
      <View>  
	  <TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(UNSET)}>
        <Text style={styles.MenuStyle}>Menu1</Text>  
		</TouchableOpacity>	
      </View>  
    ); 
  }
  
  _getMenu2() {
   return (  
     <View>  
	  <TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(UNSET)}>
        <Text style={styles.MenuStyle}>Menu2</Text>  
		</TouchableOpacity>	
      </View>    
    );  
    }
	 _getMenu3() {
   return (  
      <View>  
	  <TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(UNSET)}>
        <Text style={styles.MenuStyle}>Menu3</Text>  
		</TouchableOpacity>	
      </View>  
    );  
    }
		 _getMenu4() {
   return (  
      <View>  
	  <TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(UNSET)}>
        <Text style={styles.MenuStyle}>Menu4</Text>  
		</TouchableOpacity>	
      </View>   
    );  
    }
			 _getMenu5() {
   return (  
      <View>  
	  <TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(UNSET)}>
        <Text style={styles.MenuStyle}>Menu5</Text>  
		</TouchableOpacity>	
      </View>  
    );  
    }
				 _getMenu() {
   return (  
       <View>  
	  <TouchableOpacity style={styles.button} onPress={this._getExperienceButtonOnPress(UNSET)}>
        <Text style={styles.MenuStyle}>Menus to be updated</Text>  
		</TouchableOpacity>	
      </View>  
    );  
    }
_getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType : navigatorType
      })
    };
  }
 }
   


 
const styles = StyleSheet.create ({
  button: {
	//height:85, 
	flexDirection: 'row',
    marginBottom: 1,
	marginTop:1,
	padding: 2,
    margin: 5,
	alignItems: 'flex-start',
    //backgroundColor: '#d2f7f1',
	},
  ImageIconStyle: {
   padding: 20,
   margin: 0,
   height: 80,
   width: 80,
   resizeMode : 'stretch',

},

TextStyle :{
  color: "green",
  marginBottom : 50,
  marginRight :0,
  alignSelf: 'flex-end',
  fontSize: 20
  
},
RegionStyle :{
	  color: "green",
   fontSize: 15
  
},
MenuStyle :{
	  color: "orange",
   fontSize: 30,
   alignSelf: 'center',
  
},


SeparatorLine :{

//backgroundColor : '#fff',
width: 10

}
});