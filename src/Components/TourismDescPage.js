import { ListItem } from "@material-ui/core";
import React, { Component, useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SectionList,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Linking,
} from "react-native";
import { Tile } from "react-native-elements";
// import { Card } from "react-native-elements/dist/card/Card";
import { WebView } from "react-native-webview";
import { render } from "react-dom";
import { RepeatRounded } from "@material-ui/icons";

export default function TourismDescPage({ route, navigation }) {
  const { clicked, desc, img, model, url } = route.params;
  const [nameOfPage, setNameOfPage] = useState(clicked);
  const [des, setDes] = useState(desc);
  const [image, setImage] = useState(img);
  const [mod, setMod] = useState(model);
  const [website, setWebiste] = useState(url);

  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={() =>  navigation.navigate("ArModels", {clicked: des, arModel: mod})}>
         <Image source={{ uri: image }} style={styles.ImageIconStyle} />
        <Text> {des} </Text>
        <Text style={styles.bigBlue} onPress={() => Linking.openURL(website)}>Tickets</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 22,
    backgroundColor: "#F5FCFF",
  },
  item: {
    padding: 50,
    fontSize: 18,
    height: 44,
  },
  SeparatorLine: {
    width: '100%',
    // marginTop: 8,
    marginBottom: 4,
  },
  ImageIconStyle: {
    padding: 20,
    margin: 0,
    height: 170,
    width: '100%',
    resizeMode: "stretch",
    // borderTopRightRadius: 20,
    // borderBottomRightRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderTopLeftRadius: 20,

    //marginTop: 50,
    // resizeMode: "cover",
    flexDirection: "row",
  },
  TextStyle: {
    //color: "#949494",
    // fontSize: 16,
    fontWeight: "700",
    fontSize: 24,
    color: "#000",
    // marginTop: 2,
    marginBottom: 16,
    marginLeft: 2,
    // color: "black",
    // marginBottom: 10,
    // marginRight: 0,
    // alignSelf: "flex-end",
    // fontSize: 20,
    // paddingRight: 30,
  },
  priceTextStyle:{
    fontWeight: "600",
    fontSize: 18,
    color: "green",
    marginTop: 4,
    marginRight: 4,
  },
bigBlue: {
    color: 'blue',
    fontSize: 15,
  },
});
