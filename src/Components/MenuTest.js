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
import Separator from "./Separator";
// import { Card } from "react-native-elements/dist/card/Card";
import { WebView } from "react-native-webview";
import { render } from "react-dom";
import { RepeatRounded } from "@material-ui/icons";

export default function MenuTest({ route, navigation }) {
  const { clicked, restParam, foodParam, restParamId } = route.params;
  const [nameOfPage, setNameOfPage] = useState(clicked);
  const [reData, setReData] = useState(restParam);
  const [foData, setFoData] = useState(foodParam);
  const [resId, setResId] = useState(restParamId);

  navigation.setOptions({ title: nameOfPage });
  // console.log(foodParam);
  useEffect(() => {
    console.log(resId);
  }, []);

  return (
    <View style={styles.container}>
      {(() => {
        if (resId % 1 === 0) {
          return (
            <FlatList
              data={foData}
              renderItem={({ item }) => (
                <View>
                  {(() => {
                    if (item.fid == resId) {
                      return (
                        item.fmodel ? 
                        <TouchableOpacity
                          onPress={() =>
                            
                            navigation.navigate("ArModels", {
                              clicked: item.fname,
                              arModel: item.fmodel,
                            })
                          }
                          
                        >
                          <View>
                            <Image
                              source={{ uri: item.fimg }}
                              style={styles.ImageIconStyle}
                            />
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 4}}>
                              <Text style={styles.TextStyle}> {item.fname} </Text>
                              <Text style={styles.priceTextStyle}>
                                {" "}
                                ${item.fprice}{" "}
                              </Text>
                            </View>
                          </View>
                          <View
                            style={{
                              borderBottomColor: "black",
                              borderBottomWidth: 1,
                            }}
                          />
                          <View style={styles.SeparatorLine} />
                        </TouchableOpacity>
                        :
                        <>
                        <View>
                            <Image
                              source={{ uri: item.fimg }}
                              style={styles.ImageIconStyle}
                            />
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 4}}>
                              <Text style={styles.TextStyle}> {item.fname} </Text>
                              <Text style={styles.priceTextStyle}>
                                {" "}
                                ${item.fprice}{" "}
                              </Text>
                            </View>
                          </View>
                          <View
                            style={{
                              borderBottomColor: "black",
                              borderBottomWidth: 1,
                            }}
                          />
                          <View style={styles.SeparatorLine} />
                          </>
                      );
                    }
                  })()}
                </View>
              )}
            />
          );
        } else {
          return (
            <View>
              <Text> Menu to be updated. Please stay tuned to this page. </Text>
            </View>
          );
        }
      })()}
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
  }
});
