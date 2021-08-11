import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import noResults from '../../assets/no-results.jpeg';
import Separator from "./Separator";

export default function ListPage({ route, navigation }) {
  const { restData, foodData, tourismData, eventData } = route.params;
  const [resData, setResData] = useState(restData);
  const [fooData, setfooData] = useState(foodData);
  const [tourData, setTourData] = useState(tourismData);
  const [eventsData, seteventsData] = useState(eventData);
  const [filData, setfilData] = useState(resData);
  const [search, setsearch] = useState("");

  const dataFilter = resData;

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

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        {!tourData && !eventsData && (
          <TextInput
            style={styles.textInputStyle}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search here for cuisine"
            onChangeText={(text) => searchFilter(text)}
          />
        )}
        <FlatList
          data={tourismData ? tourData : eventData ? eventsData : filData}
          keyExtractor={(item) => (tourData ? item.tname : item.name)}
          ListEmptyComponent={() => {
            return (
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 500, padding: 30}}>
                <Image style={{height: '90%', width:'90%'}} source={noResults} />
                <Text style={{alignSelf: 'center', color: "#949494", fontSize: 22, fontStyle:'italic'}}>{"No resturants with the searched Cuisine, kindly search some other Cuisine."}</Text>
              </View>
            );
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                !tourismData && !eventData
                  ? navigation.navigate("menu", {
                    title: item.name,
                    restParam: resData,
                    foodParam: fooData,
                    restParamId: item.uid,
                  })
                  : tourismData
                    ? navigation.navigate("TourismDestination", {
                      title: item.tname,
                      desc: item.tdesc,
                      img: item.timg,
                      model: item.tmodel,
                      url: item.turl,
                      page: "Tourism",
                    })
                    : navigation.navigate("TourismDestination", {
                      title: item.billName,
                      desc: item.billDesc,
                      img: item.billPic,
                      url: item.billUrl,
                      page: "Events",
                    });
              }}
            >
              <View style={styles.row}>
                <View style={styles.imageHeader}>
                  <Image
                    source={{
                      uri: tourismData
                        ? item.timg
                        : eventsData
                          ? item.billPic
                          : item.imgUrl,
                    }}
                    style={styles.ImageIconStyle}
                  />
                </View>

                <View style={styles.contentInfo}>
                  <Text
                    style={[styles.nameText, eventData && { fontSize: 16 }]}
                  >
                    {tourismData
                      ? item.tname
                      : eventsData
                        ? item.billName
                        : item.name}
                  </Text>

                  <Text style={styles.contentText}>
                    {tourismData ? item.taddr : item.loc}
                  </Text>
                  {!tourismData && !eventData && (
                    <Text
                      style={styles.contentText}
                    >{`Cuisine: ${item.cuisine}`}</Text>
                  )}
                </View>
              </View>
              <Separator />
            </TouchableOpacity>
          )}
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
    paddingRight: 4,
    paddingLeft: 4,
    paddingVertical: 4,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  nameText: {
    fontWeight: "800",
    fontSize: 20,
    color: "#000",
    flexWrap: "wrap",
    flexShrink: 1,
    marginBottom: 4,
  },
  contentText: {
    color: "#949494",
    fontSize: 16,
    marginTop: 2,
    marginBottom: 4,
    flexWrap: "wrap",
    flexShrink: 1,
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
    flex: 1,
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
