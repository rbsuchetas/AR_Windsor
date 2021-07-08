import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import Separator from "./Separator";

export default function TourismDescPage({ route, navigation }) {
  const { title, desc, img, model, url } = route.params;
  const [des, setDes] = useState(desc);
  const [image, setImage] = useState(img);
  const [mod, setMod] = useState(model);
  const [website, setWebiste] = useState(url);

  return (
    <View style={styles.container}>
         {/* <TouchableOpacity onPress={() =>  navigation.navigate("ArModels", {title: title, arModel: mod})}> */}
         {/* <Image source={{ uri: image }} style={styles.ImageIconStyle} /> */}
        {/* <Text> {des} </Text> */}
        {/* <Text style={styles.bigBlue} onPress={() => Linking.openURL(website)}>Tickets</Text> */}
        {/* </TouchableOpacity> */}
        <Image source={{ uri: image }} style={styles.ImageIconStyle} />
        <Separator />
        <ScrollView style={{flex : 3, paddingHorizontal: 15, marginTop: 10, marginBottom: 15}}>
          <Text style={styles.contentText}>
            {des}
          </Text>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            title="View AR Model"
            type="outline"
            titleStyle={{fontWeight: '600'}}
            buttonStyle={[styles.button, {marginLeft: 10, backgroundColor: '#24a0ed', borderRadius: 10}]}
            // raised
          />
          <Button
            title="Buy Tickets Online"
            titleStyle={{fontWeight: '600'}}
            type="outline"
            buttonStyle={[styles.button, {marginRight: 10, backgroundColor: '#24a0ed', borderRadius: 10}]}
            raised
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 22,
    backgroundColor: "#F5FCFF",
  },
  ImageIconStyle: {
    height: 350,
    width: '100%',
    resizeMode: 'stretch',
  },
  contentText: {
    color: 'grey',
    fontSize: 20,
    marginBottom: 4,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  buttonContainer:{
    alignSelf: 'flex-end',
    marginBottom: 35,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width:'100%',
    justifyContent: 'space-between',
  },
  button: {
    width: 200
  }
});
