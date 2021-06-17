//import React, { Component, useState } from "react";
//import { Platform, StyleSheet, Text, View } from "react-native";
// import { Card } from "react-native-elements/dist/card/Card";
import React, { Component, useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View, ScrollView, SectionList ,FlatList, TouchableOpacity, Image,
ActivityIndicator } from "react-native";
// import { Card } from "react-native-elements/dist/card/Card";
import { ListItem, Divider } from 'react-native-elements'
import Separator from "./Separator";
import { firebase } from '@firebase/app';
import "firebase/firestore"
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBOWLsoEsHMG6F5U_-FRkO7cpz2ZSTit5Y",
    authDomain: "arwindsor-d70c2.firebaseapp.com",
    projectId: "arwindsor-d70c2",
    storageBucket: "arwindsor-d70c2.appspot.com",
    messagingSenderId: "680918066684",
    appId: "1:680918066684:web:9a5a415e258ae6d739be79",
    measurementId: "G-6FBR66S2LN"
  };

  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default function RestaurantList({ route, navigation }) {
   const { clicked } = route.params;
  const [nameOfPage, setNameOfPage] = useState(clicked);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [restList, setRestList] = useState([]);
  const [restListMenu, setRestListMenu] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState();
  const [error, setError] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    db.collection('restaurantsList').get()
      .then(response => {
        const fetchedRestaurants = [];
        response.docs.forEach(document => {
          const fetchedRestaurant = {
            id: document.id,
            ...document.data()
          };
          fetchedRestaurants.push(fetchedRestaurant);
        });
        setRestList(fetchedRestaurants);
        console.log(fetchedRestaurants);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

 navigation.setOptions({ title: nameOfPage })
  return (
      <View style={styles.container}>
      <FlatList
        data={restList}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('menu', { clicked: item.name })}>
            <View style={styles.row}>
              <View style={styles.content}>
                <View style={styles.header}>
                  <Text style={styles.nameText}>{item.name}</Text>
                </View>
                <Text style={styles.contentText}>{item.loc}</Text>
               <Image source={{ uri: item.imgUrl }} style={styles.ImageIconStyle} />
                <Text style={styles.contentText}>{item.active}</Text>
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
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 30,
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
    alignItems: 'center'
  },
  content: {
    flexShrink: 1
  },
  header: {
    flexDirection: 'row'
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000'
  },
  dateText: {},
  contentText: {
    color: '#949494',
    fontSize: 16,
    marginTop: 2
  },
  SeparatorLine :{
  width: 10
},
  ImageIconStyle: {
   padding: 20,
   margin: 0,
   height: 80,
   width: 80,
   resizeMode : 'stretch',
},
});


