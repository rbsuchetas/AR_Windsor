import React, { Component, useState, useEffect} from "react";
import { Platform, StyleSheet,SafeAreaView, Text,TextInput, View, ScrollView, SectionList ,FlatList, TouchableOpacity, Image, 
ActivityIndicator } from "react-native";
import Separator from "./Separator";

export default function RestaurantPage({ route, navigation }) {
  const { clicked, restData, foodData } = route.params;
  const [nameOfPage, setNameOfPage] = useState(clicked);
  const [resData, setResData] = useState(restData);
  const [dupResData, setdupResData] = useState(resData);
  
  
  const [fooData, setfooData] = useState(foodData);

  

 navigation.setOptions({ title: nameOfPage })
 const searchRestaurant = (value) => {
   const filterRestaurant = resData.filter(
     wholeRestObject =>{
       let cusineLowercase= wholeRestObject.cuisine?wholeRestObject.cuisine.toLowerCase():""
       let searchTermCuisine=value.toLowerCase()
       return cusineLowercase.indexOf(searchTermCuisine)>-1;
     }
     
   )
   
   value?setdupResData(filterRestaurant):setdupResData(resData)
   console.log(filterRestaurant);
   console.log(resData);


 }
  return (
    
      <View style={styles.container}>
        <View style={{flex:1}}>
              <SafeAreaView style={{background:'#2f363c'}}/>
              <TextInput
              placeholder="Search here"
              placeholderTextColor="#dddddd"
              style={{
                backgroundColor:'2f363c',
                height:50,
                fontSize:36,
                padding:10,
                color:'red',
                borderBottomWidth:0.5,
                borderBottomColor:'#7d90a0'
          
              }}
              onChangeText={(value)=>searchRestaurant(value)}
              />
            </View>
      <FlatList
        data={dupResData}
        
        
        keyExtractor={item => item._id}
        renderItem={({ item }) => (

          <TouchableOpacity onPress={() => navigation.navigate('menu', { clicked: item.name, restParam: resData ,foodParam: fooData, restParamId: item.uid })}>
            
            
            <View style={styles.row}>
              <View style={styles.content}>
                <View style={styles.header}>
                   <View style={styles.imageHeader}>
                     <Image source={{ uri: item.imgUrl }} style={styles.ImageIconStyle} />
                   </View>
                   
                   <View style={styles.contentInfo}>
                      <Text style={styles.nameText}>{item.name}</Text>
                     
                     <Text style={styles.contentText}>{item.loc}</Text>
                    <Text style={styles.contentText}>{`Cuisine: ${item.cuisine}`}</Text>
                   </View>
                   
                </View>
                
              </View>
            </View>
            <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
             <View style={styles.SeparatorLine} />
          </TouchableOpacity>
        )}
       ItemSeparatorComponent={() => <Separator />}
      />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500'
  },
  row: {
    paddingRight: 10,
    paddingLeft: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    flexShrink: 1,
    justifyContent:'space-between'
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    flex: 6
  },
  nameText: {
    fontWeight: '800',
    fontSize: 20,
    color: '#000',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  dateText: {},
  contentText: {
    color: '#949494',
    fontSize: 16,
    marginTop: 2,
    marginBottom: 4,
  },
  SeparatorLine :{
    width: '100%',
},
  ImageIconStyle: {
   padding: 20,
   margin: 0,
   height: 120,
   width: 120,
   resizeMode : 'stretch',
   alignContent:'flex-start',
   marginLeft: 10
},
contentInfo: {
  alignContent: 'flex-end',
  marginLeft: 20
}
});


