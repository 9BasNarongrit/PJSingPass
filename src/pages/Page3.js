/*import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TextInput } from "react-native"
import { Header, Icon, Input } from "react-native-elements";

const Page3 = ({ navigation, route }) => {
    const [name, setName] = useState("test")
    const [surname, setSurname] = useState("")

    useEffect(() => {
        // onChangeName()
    }, [])

    const onChangeName = () => {
        setName("TESFASGDSHSNJD")
    }

    return (
        <>
            <Header
                leftComponent={
                    <Icon
                        name="chevron-thin-left"
                        type="entypo"
                        color="black"
                        onPress={() => navigation.goBack()}
                    />
                }
                centerComponent={{ text: "Page3", style: { color: 'black' } }}
                innerContainerStyles={{ backgroundColor: "white" }}
                containerStyle={{
                    backgroundColor: "white",
                    borderBottomColor: "white",
                }}
            />
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ paddingVertical: 10 }}>Name : {name}</Text>
                <TextInput onChangeText={(value) => setName(value)} style={{borderWidth:1,borderColor:"black",width:"100%"}} />
            </View>

        </>
    )
}

export default Page3*/

{/*
import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7CA1B4",
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
  },
  square: {
    backgroundColor: "#7cb48f",
    width: 100,
    height: 100,
    margin: 4,
  },
});

 */}



import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Header, Icon, Input, Text, Button, Card } from "react-native-elements";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { useFonts } from 'expo-font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import Carousel from 'react-native-snap-carousel-v4'
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import Card1 from '../../assets/image/card1.png';
import Card2 from '../../assets/image/card2.png';


const { width: screenWidth, height: screenHeight } = Dimensions.get("window")

const Page3 = ({ navigation, route }) => {
  const [cardList, setCardList] = useState([
    {
      id: "01",
      type: "nric",
      no: "S****031Z",
      source: "../../assets/image/card1.png"
      //img_url: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
    },
    {
      id: "02",
      type: "driving",
      no: "S****031Z",
      source: "../../assets/image/card2.png"
      //img_url: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    },
    {
      id: "03",
      type: "blank",
      no: "123",
      //img_url: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    },
  ])
  const carouselRef = useRef(null)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const onPressNavigate = () => {
    navigation.navigate("Login")
  }
  /*
      const [fontsLoaded] = useFonts({
          'Poppins-Black': require('../../assets/fonts/Poppins-Black.ttf'),
      });*/

  const [fontsLoaded, fontError] = useFonts({
    'Poppins-ExtraLight': require('../../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const onPressBarcode = () => {
    console.log("Barcode pressed!")
  }

  const UserCardView = ({ }) => (
    <View style={{ height: screenHeight * hp('0.08%'), marginBottom: hp('2%') }}>
      <Carousel
        key="card_carousel_"
        ref={carouselRef}
        layout='default'
        data={cardList}
        renderItem={_renderCardItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.85}
      //onSnapToItem={setCurrentCardIndex}
      />
      {
        cardList[currentCardIndex]?.type != "blank" && 
        <TouchableOpacity onPress={onPressBarcode}
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
            flexDirection: "row"
          }}>

          <Ionicons name="md-barcode-outline" size={24} color="black" style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: 'red', marginTop: 3 }}>Show barcode</Text>
        </TouchableOpacity>
      }
    </View>
  )

  const _renderCardItem = ({ item, index }) => {
    if ( item?.type != "blank") {
      return (
        <Image
          key={item?.id}
          source={Card1}
          style={{ width: 320, height: 200, alignSelf: 'center' }}
        />

      )
    }
 
  

    return (
      <View key={item?.type} style={{ width: 320, height: 200, borderRadius: 16, backgroundColor: "#222222", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
        <View>
          <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: 'white', textAlign: "center" }}>These are government-issued cards{"\n"}that you can use to prove your{"\n"}identity.</Text>
          <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: 'white', textAlign: "center" }}>More cards coming soon!</Text>
        </View>
        <Text style={{ fontSize: 9, fontFamily: 'Poppins-Regular', color: 'red', textAlign: "center" }}>Tap on this card to find out more</Text>
      </View>
    )
  }

  const getCardTitleText = (item) => {
    switch (item?.type) {
      case "nric": return "NRIC";
      case "driving": return "Driving Licence";
      default: return "What is this?";
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView>
        <View>
          <View style={{ paddingHorizontal: 20, flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
            {
              cardList.map((item, index) => (
                <TouchableOpacity
                  key={`${index}_${item}`}
                  onPress={() => { }}
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    borderRadius: 8,
                    backgroundColor: index == currentCardIndex ? "red" : "#E3E3E3",
                    marginRight: 10
                  }}>

                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Poppins-Regular',
                      color: index == currentCardIndex ? "white" : 'black'
                    }}>{getCardTitleText(item)}</Text>

                </TouchableOpacity>
              ))
            }
          </View>

          <UserCardView />

        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

export default Page3

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4'
  },
  fonts: {
    paddingLeft: 20,

  },

  btnCard: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6

  },
  btnMenu: {

    backgroundColor: 'white',
    width: hp('7%'),
    height: hp('7%'),
    alignSelf: 'center',
    justifyContent: 'space-around',
    borderRadius: hp('2.5%'),
    marginHorizontal: wp('4.7%'),


  }, /*
    IconMenu: {
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 18,
        width: 48,
        height: 48,
        marginBottom: 5,


    },*/
  fontMenu: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: hp('0.8%')

  },

});

