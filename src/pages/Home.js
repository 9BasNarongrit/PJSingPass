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

const Home = ({ navigation, route }) => {
    const [cardList, setCardList] = useState([
        {
            id: "01",
            type: "nric",
            no: "S****031Z",
            img_url: require('../../assets/image/card1.png'),
        },
        {
            id: "02",
            type: "driving",
            no: "S****031Z",
            img_url: require('../../assets/image/card2.png'),
        },
        {
            id: "03",
            type: "blank",
            no: "",
            img_url: require('../../assets/image/card1.png'),
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
        if (item?.type != "blank") {
            return (
                <Image
                    key={item?.id}
                    source={item?.img_url}
                    style={{ width: 320, height: 200, alignSelf: 'center' }}
                />

            )
        }
        return (
            <View key={item?.id} style={{ width: 320, height: 200, borderRadius: 16, backgroundColor: "#222222", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
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
                    <Icon style={{ paddingTop: 10, paddingBottom: 10, paddingRight: 20, alignSelf: 'flex-end' }}

                        name='settings'
                        type='feather'
                        color='black'
                        size={18}
                    //onPress={() => console.log('hello')} // 
                    />
                </View>

                <View style={styles.fonts}>
                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: 'black' }}>Welcome back,</Text>
                    <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: 'black' }}>Yong Jie Shang</Text>
                </View>


                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: 'black' }}>My Cards</Text>
                        <TouchableOpacity style={{ paddingLeft: 200 }}>
                            <Icon
                                name="more-horizontal"
                                type="feather"
                                color="#d80b16"
                                size={20}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <Icon
                                name="eye-off"
                                type="feather"
                                color="#d80b16"
                                size={18}
                                style={{ paddingLeft: 15, transform: [{ rotateX: '180deg' }] }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingHorizontal: 20, flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                        {
                            cardList.map((item, index) => (
                                <TouchableOpacity key={`${index}_${item}`} onPress={() => { }} style={{ paddingHorizontal: 12, paddingVertical: 4, borderRadius: 8, backgroundColor: index == currentCardIndex ? "red" : "#E3E3E3", marginRight: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: index == currentCardIndex ? "white" : 'black' }}>{getCardTitleText(item)}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>

                    <UserCardView />

                </View>


                <View style={{ height: 140 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: 'black' }}>My Profile</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#d80b16' }}>View all</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}

                    >
                        <Grid style={{ paddingLeft: 15 }}>
                            <Row>

                                <View>
                                    <TouchableOpacity style={styles.btnMenu}
                                    //onPress={() => navigation.navigate('')}
                                    >
                                        <Icon
                                            name='file-directory'
                                            type='octicon'
                                            color='red'
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.fontMenu}>Documents</Text>
                                </View>

                                <View>
                                    <TouchableOpacity style={styles.btnMenu}
                                        onPress={() => navigation.navigate('Personal')}>
                                        <Icon
                                            name='file-directory'
                                            type='octicon'
                                            color='red'
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.fontMenu}>Personal</Text>
                                </View>

                                <View>
                                    <TouchableOpacity style={styles.btnMenu}
                                        onPress={() => navigation.navigate('Finance')}>
                                        <Icon
                                            name='file-directory'
                                            type='octicon'
                                            color='red'
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.fontMenu}>Finance</Text>
                                </View>

                                <View>
                                    <TouchableOpacity style={styles.btnMenu}
                                        onPress={() => navigation.navigate('VehicleDL')}>
                                        <Icon
                                            name='file-directory'
                                            type='octicon'
                                            color='red'
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.fontMenu}>     Vehicle & {'\n'}
                                        Driving Licence</Text>
                                </View>

                                <View>
                                    <TouchableOpacity style={styles.btnMenu}
                                        onPress={() => navigation.navigate('Family')}>
                                        <Icon
                                            name='file-directory'
                                            type='octicon'
                                            color='red'
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.fontMenu}>Family</Text>
                                </View>

                                <View>
                                    <TouchableOpacity style={styles.btnMenu}
                                        onPress={() => navigation.navigate('Education')}
                                    >
                                        <Icon
                                            name='file-directory'
                                            type='octicon'
                                            color='red'
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.fontMenu}>Education</Text>
                                </View>

                                <View>
                                    <TouchableOpacity style={styles.btnMenu}
                                        onPress={() => navigation.navigate('Property')}
                                    >
                                        <Icon
                                            name='file-directory'
                                            type='octicon'
                                            color='red'
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.fontMenu}>Property</Text>
                                </View>

                                <View>
                                    <TouchableOpacity style={styles.btnMenu}
                                        onPress={() => navigation.navigate('RegistersOE')}
                                    >
                                        <Icon
                                            name='file-directory'
                                            type='octicon'
                                            color='red'
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.fontMenu}> Registers {'\n'}
                                        of Electors</Text>
                                </View>

                                <View>
                                    <TouchableOpacity style={styles.btnMenu}
                                    //onPress={() => navigation.navigate('')}
                                    >
                                        <Icon
                                            name='file-directory'
                                            type='octicon'
                                            color='red'
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.fontMenu}>NS Benefits</Text>
                                </View>

                            </Row>
                        </Grid>
                    </ScrollView>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: 'black' }}>Favourites</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#d80b16' }}>Edit Favourites</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 25, paddingVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity>
                            <Icon
                                name='file-directory'
                                type='octicon'
                                color='red'
                                size={25}
                            />
                            <Text style={styles.fontMenu}>CPF Website</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon
                                name='file-directory'
                                type='octicon'
                                color='red'
                                size={25}
                            />
                            <Text style={styles.fontMenu}>HealthHub</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon
                                name='file-directory'
                                type='octicon'
                                color='red'
                                size={25}
                            />
                            <Text style={styles.fontMenu}>MyICA</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: 'black' }}>Last used shortcuts</Text>
                        <View />
                    </View>
                    <View style={{ paddingHorizontal: 25, paddingVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity>
                            <Icon
                                name='file-directory'
                                type='octicon'
                                color='red'
                                size={25}
                            />
                            <Text style={styles.fontMenu}>CPF Website</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", paddingTop: 10, marginBottom: 40 }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: 'red' }}>View all shortcuts</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home

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

