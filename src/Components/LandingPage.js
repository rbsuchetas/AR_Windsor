import React, { Component } from "react";
import { Button } from "react-native";
import { Platform, StyleSheet, View } from "react-native";
import { Card, Text, Tile } from "react-native-elements";
// import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
// import DeckOutlinedIcon from '@material-ui/icons/DeckOutlined';


export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headingCard}>
        <Tile
          imageSrc={require('../../assets/PastelGradientPreview.jpg')}
          title="AR Windsor"
          titleNumberOfLines='2'
          titleStyle={{ marginBottom: 0, fontSize: 48, color: 'black', fontWeight: '600' }}
          featured
          height={300}
          width='100%'
          caption="Food | Travel | Advertisements | Events"
          captionStyle={{ color: 'black' }}
        />
      </View>
      <View style={styles.bodyCard}>
        <View style={styles.tileCard}>
          <Tile
            imageSrc={require('../../assets/PastelGradientPreview.jpg')}
            title="Restaurants"
            // titleNumberOfLines='2'
            titleStyle={{ marginBottom: 0, fontSize: 12, color: 'black', fontWeight: '600' }}
            featured
            height={100}
            width='100%'
            // caption="Food | Travel | Advertisements | Events"
            captionStyle={{ color: 'black' }}
            // style={{ alignSelf: 'center' }}
            onPress={() => navigation.navigate('Profile', { title: "Restaurants" })}
          />
        </View>
        <View style={styles.tileCard}>
          <Tile
            imageSrc={require('../../assets/PastelGradientPreview.jpg')}
            title="Tourism"
            // titleNumberOfLines='2'
            titleStyle={{ marginBottom: 0, fontSize: 12, color: 'black', fontWeight: '600' }}
            featured
            height={100}
            width='100%'
            // caption="Food | Travel | Advertisements | Events"
            captionStyle={{ color: 'black' }}
            // style={{ alignSelf: 'center' }}
            onPress={() => navigation.navigate('Profile', { title: "Tourism" })}
          />
        </View>
        <View style={styles.tileCard}>
          <Tile
            imageSrc={require('../../assets/PastelGradientPreview.jpg')}
            title="Events"
            // titleNumberOfLines='2'
            titleStyle={{ marginBottom: 0, fontSize: 12, color: 'black', fontWeight: '600' }}
            featured
            height={100}
            width='100%'
            // caption="Food | Travel | Advertisements | Events"
            captionStyle={{ color: 'black' }}
            // style={{ alignSelf: 'center' }}
            onPress={() => navigation.navigate('Profile', { title: "Events" })}
          />
        </View>
        <View style={styles.tileCard}>
          <Tile
            imageSrc={require('../../assets/PastelGradientPreview.jpg')}
            title="TBD"
            // titleNumberOfLines='2'
            titleStyle={{ marginBottom: 0, fontSize: 12, color: 'black', fontWeight: '600' }}
            featured
            height={100}
            width='100%'
            // caption="Food | Travel | Advertisements | Events"
            captionStyle={{ color: 'black' }}
            // style={{ alignSelf: 'center' }}
            onPress={() => navigation.navigate('AR', { title: "Ar-test" })}
          />
        </View>
      </View>
    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingTop: 30,
    paddingHorizontal: 30,
    backgroundColor: "#F5FCFF",
  },
  headingCard: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
  },
  bodyCard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tileCard: {
    width: 125,
    marginBottom: 30,
    // alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'flex-start',
    // backgroundColor: 'powderblue',
  }
});
