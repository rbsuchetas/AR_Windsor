import React, { Component, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import { Card } from "react-native-elements/dist/card/Card";

export default function TestPage({ route, navigation }) {
  const { clicked } = route.params;
  const [nameOfPage, setNameOfPage] = useState(clicked);
  // React.useEffect(() => {
  //   setNameOfPage(clicked);
  // }, [clicked]);
  navigation.setOptions({ title: nameOfPage })
  return (
    <View style={styles.container}>
      <Text>This is the {clicked} page</Text>

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
  }
});
