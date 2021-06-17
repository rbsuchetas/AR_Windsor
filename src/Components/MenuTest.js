import { ListItem } from "@material-ui/core";
import React, { Component, useState } from "react";
import { Platform, StyleSheet, Text, View, FlatList, Image } from "react-native";
// import { Card } from "react-native-elements/dist/card/Card";

export default function MenuTest({ route, navigation }) {
  const { clicked } = route.params;
  const [nameOfPage, setNameOfPage] = useState(clicked);

 

  navigation.setOptions({ title: nameOfPage })
 

    return (   
        <View style={styles.container}>
            {(() => {
              if (nameOfPage == 'La Pizza'){
                  return (
                      <FlatList
                    data={[
                        {key: 'item1',Name: 'Chicken Pizza', price: '10', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCm7bDdyn1SjnMT4zIAqHlkko9VMPAiKK6w&usqp=CAU'},
                        {key: 'item2',Name: 'Veg Pizza', price: '3', img:'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/June-07/No_Yeast_Thin_Crust_Veggie_Pizza_Recipe-1_400.jpg'},
                        {key: 'item3',Name: 'Lemonade', price: '4', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-PvUk5DFxSEbHhmk5sJ6Fs-Gdnpgd7uZeA&usqp=CAU'},
                      ]}
                    renderItem={({item}) => (
                    <View>
                       <Text>{item.Name}</Text>
                        <Text>${item.price}</Text>
                         <Image source={{ uri: item.img }} style={styles.ImageIconStyle} />
                         <br/>
                    <View
                    style={{
                     borderBottomColor: 'black',
                     borderBottomWidth: 1,
                    }}
                  />
                    </View>
                ) }
               />
                  )
              }

              
              if (nameOfPage == 'Le Habanero Shack'){
                return (
                   <FlatList
                    data={[
                        {key: 'item1',Name: 'Noodles', price: '6', img: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Egg-Noodles-min.jpg'},
                        {key: 'item2',Name: 'Taco Plate', price: '14', img: 'https://i.pinimg.com/originals/6c/50/de/6c50decf55db43cbcb572718784a0608.jpg'},
                        {key: 'item3',Name: 'Beer', price: '7', img:'https://assets.architecturaldigest.in/photos/6094cda9f200b55816a3ec45/master/w_1600%2Cc_limit/Drifters-craft-beer-delivery-Mumbai.jpeg'},
                        {key: 'item4',Name: 'Ice Cream', price: '2', img:'https://images.herzindagi.info/image/2020/Jun/chocolate-parle-g-ice-cream.jpg'},
                      ]}
                    renderItem={({item}) => (
                    <View>
                       <Text>{item.Name}</Text>
                        <Text>${item.price}</Text>
                        <Image source={{ uri: item.img }} style={styles.ImageIconStyle} />
                         <br/>
                    <View
                    style={{
                     borderBottomColor: 'black',
                     borderBottomWidth: 1,
                    }}
                  />
                    </View>
                ) }
               />
 
                )
              }

              if (nameOfPage == 'Burgerista'){
                return (
                   <FlatList
                    data={[
                        {key: 'item1',Name: 'Double Cheese Burger', price: '8.20', img:'https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Double-Cheeseburger.jpg'},
                        {key: 'item2',Name: 'Hamburger', price: '7', img:'https://www.seriouseats.com/thmb/3JoYWz3_PajrDhL57P9eQrpg-xE=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__07__20150702-sous-vide-hamburger-anova-primary-bf5eefff4505446f9cbf33f5f2d9b2e6.jpg'},
                      ]}
                    renderItem={({item}) => (
                    <View>
                       <Text>{item.Name}</Text>
                        <Text>${item.price}</Text>
                        <Image source={{ uri: item.img }} style={styles.ImageIconStyle} />
                         <br/>
                    <View
                    style={{
                     borderBottomColor: 'black',
                     borderBottomWidth: 1,
                    }}
                  />
                    </View>
                ) }
               />
                )
              }

                if (nameOfPage == 'The Grand Restaurant'){
                return (
                   <FlatList
                    data={[
                        {key: 'item1',Name: 'Thai Rice', price: '12', img:'https://www.recipetineats.com/wp-content/uploads/2015/09/Thai-Fried-Rice_2.jpg'},
                        {key: 'item2',Name: 'Breakfast Burrito', price: '7', img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/14/0/FNK_breakfast-burrito_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382542427230.jpeg'},
                        {key: 'item3',Name: 'Sizzler', price: '14', img:'https://vaya.in/recipes/wp-content/uploads/2019/01/Chicken-Sizzler.jpg'},
                        {key: 'item4',Name: 'Margarita', price: '4', img:'https://www.liquor.com/thmb/8IIRRxuU3zaz8IARR-cPlltj680=/720x720/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__05150949__Frozen-Margarita-720x720-recipe-59566ae60c504508906963b1de69ad25.jpg'},
                      ]}
                    renderItem={({item}) => (
                    <View>
                       <Text>{item.Name}</Text>
                        <Text>${item.price}</Text>
                        <Image source={{ uri: item.img }} style={styles.ImageIconStyle} />
                         <br/>
                    <View
                    style={{
                     borderBottomColor: 'black',
                     borderBottomWidth: 1,
                    }}
                  />
                    </View>
                ) }
               />
                )
              }

                if (nameOfPage == 'The Pink Square'){
                return (
                   <FlatList
                    data={[
                        {key: 'item1',Name: 'Butter Tarts', price: '15', img:'https://i.pinimg.com/564x/c8/ed/33/c8ed33b70db70e3792bac2ebbf89ba47.jpg'},
                        {key: 'item2',Name: 'Montreal-style Bagels', price: '8', img:'https://www.kosher.com/resized/details.slide/h/e/Hecht__Hanoch_Montreal_Bagels_crop.jpg'},
                        {key: 'item3',Name: 'Nanaimo Bars', price: '6',img:'http://2.bp.blogspot.com/-IHSIA_3ftrY/Tc64LYOOxjI/AAAAAAAAAZc/tOTe5Xyzffg/s1600/nanaimo+bars+crowded.jpg'},
                      ]}
                    renderItem={({item}) => (
                    <View>
                       <Text>{item.Name}</Text>
                        <Text>${item.price}</Text>
                        <Image source={{ uri: item.img }} style={styles.ImageIconStyle} />
                         <br/>
                    <View
                    style={{
                     borderBottomColor: 'black',
                     borderBottomWidth: 1,
                    }}
                  />
                    </View>
                ) }
               />
                )
              }
              
              return null;
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