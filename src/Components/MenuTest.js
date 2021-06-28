import { ListItem } from "@material-ui/core";
import React, { Component, useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View, ScrollView, SectionList ,FlatList, TouchableOpacity, Image,
ActivityIndicator, Linking } from "react-native";
import Separator from "./Separator";
// import { Card } from "react-native-elements/dist/card/Card";
import { WebView } from 'react-native-webview';
import { render } from "react-dom";

export default function MenuTest({ route, navigation }) {
  const { clicked, restParam, foodParam, restParamId } = route.params;
  const [nameOfPage, setNameOfPage] = useState(clicked);
  const [reData, setReData] = useState(restParam);
  const [foData, setFoData] = useState(foodParam);
  const [resId, setResId] = useState(restParamId);


  navigation.setOptions({ title: nameOfPage })

  useEffect(() => {
      console.log(resId)
     }, []);


 return (   
        <View style={styles.container}>
            {(() => {
             if (resId % 1 === 0){
                  return (
                      <FlatList
                    data={foData}
                    renderItem={({item}) => (
                    <View>
                     {(() => {
                         if (item.fid == resId){
                         return (
                             <TouchableOpacity onPress={() => navigation.navigate('ArModels', { clicked: item.fname })}>
                                    <View>  
                                        <Text> {item.fname} </Text>
                                        <Text> ${item.fprice} </Text>
                                         <Image source={{ uri: item.fimg }} style={styles.ImageIconStyle} />
                                         
                                      </View>
                                      <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
                                  </TouchableOpacity>    
                                      
                            )
                    }

                    })()}
                    
                     
                         
                    
                    </View>
                ) }
               />
                  )
              }


              else{
                  return(
                      <View>
                          <Text> Menu to be updated. Please stay tuned to this page. </Text>
                          </View>
                  )
              }
              
          
            })()}
        </View>
    )

    

}



const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
   ImageIconStyle: {
   padding: 20,
   margin: 0,
   height: 80,
   width: 80,
   resizeMode : 'stretch',
   }
});