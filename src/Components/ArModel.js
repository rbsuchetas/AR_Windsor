
import React, { Component, useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import { Card } from "react-native-elements/dist/card/Card";
import Expo from "expo";
//import * as THREE from "three";
import { THREE } from "expo-three";
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
//import GLTFLoader from "three-gltf-loader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Asset } from "expo-asset";
import { WebView } from 'react-native-webview';


export default function ArModel({route, navigation}) {
const { clicked, arModel } = route.params;
const [foodItem, setFoodItem] = useState(clicked);
const [model, setModel] = useState(arModel);


return (
        <View style={styles.container}>
          <WebView source={{ html: model}} />
        </View>
       );
}      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    backgroundColor: "#F5FCFF",
  }
});