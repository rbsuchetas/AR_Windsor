import React, { Component, useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  SectionList,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import Separator from "./Separator";

export default function RestaurantPage({ route, navigation }) {
  const { clicked, restData, foodData } = route.params;
  const [nameOfPage, setNameOfPage] = useState(clicked);
  const [resData, setResData] = useState(restData);
  const [fooData, setfooData] = useState(foodData);
  const [filData, setfilData] = useState(resData);
  const [search, setsearch] = useState("");

  const dataFilter = resData;
  console.log(dataFilter);
  // const cuisineData = dataFilter.map((item) => {
  //   return item.cuisine;
  // });
  // console.log(cuisineData);

  const searchFilter = (text) => {
    if (text) {
      const newData = dataFilter.filter((item) => {
        const itemData = item.cuisine
          ? item.cuisine.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilData(newData);
      setsearch(text);
    } else {
      setfilData(resData);
      setsearch(text);
    }
  };

  navigation.setOptions({ title: nameOfPage });
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <TextInput
          style={styles.textInputStyle}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
          onChangeText={(text) => searchFilter(text)}
        />
        <FlatList
          data={filData}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("menu", {
                  clicked: item.name,
                  restParam: resData,
                  foodParam: fooData,
                  restParamId: item.uid,
                })
              }
            >
              <View style={styles.row}>
                <View style={styles.content}>
                  <View style={styles.header}>
                    <View style={styles.imageHeader}>
                      <Image
                        source={{ uri: item.imgUrl }}
                        style={styles.ImageIconStyle}
                      />
                    </View>

                    <View style={styles.contentInfo}>
                      <Text style={styles.nameText}>{item.name}</Text>

                      <Text style={styles.contentText}>{item.loc}</Text>
                      <Text
                        style={styles.contentText}
                      >{`Cuisine: ${item.cuisine}`}</Text>
                    </View>
                  </View>
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
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </SafeAreaView>
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
    fontWeight: "500",
  },
  row: {
    paddingRight: 10,
    paddingLeft: 5,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    flexShrink: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 6,
  },
  nameText: {
    fontWeight: "800",
    fontSize: 20,
    color: "#000",
    flexWrap: "wrap",
    marginBottom: 4,
  },
  dateText: {},
  contentText: {
    color: "#949494",
    fontSize: 16,
    marginTop: 2,
    marginBottom: 4,
  },
  SeparatorLine: {
    width: "100%",
  },
  ImageIconStyle: {
    padding: 20,
    margin: 0,
    height: 120,
    width: 120,
    resizeMode: "stretch",
    alignContent: "flex-start",
    marginLeft: 10,
  },
  contentInfo: {
    alignContent: "flex-end",
    marginLeft: 20,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
});
