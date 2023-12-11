import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView, TouchableOpacity, Image } from "react-native"
import { Header, Icon, Card, ListItem } from "react-native-elements";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import infoRedIcon from '../../assets/image/ired.png';
import infoBlackIcon from '../../assets/image/iblack.png';


const VehicleDL = ({ navigation, route }) => {
    //const [expanded1, setExpanded1,] = useState(false)
    //const [expanded2, setExpanded2,] = useState(false)

    useEffect(() => {
        // onChangeName()
    }, [])

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

    return (

        <SafeAreaProvider style={styles.container}>
            <StatusBar />
            <Header
                //innerContainerStyles={{  }}
                containerStyle={{
                    backgroundColor: "#f4f4f4",
                    paddingHorizontal: wp('5%')
                    //borderBottomColor: "black",


                }}
                statusBarProps={{ backgroundColor: '#f4f4f4' }}
                leftComponent={

                    <TouchableOpacity>
                        <View style={styles.headerLeaf}>
                            <Icon
                                name="arrow-left"
                                type="feather"
                                color="black"
                                size={hp('2.8%')}
                                onPress={() => navigation.goBack()}
                            />
                        </View>

                    </TouchableOpacity>
                }

                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity>
                            <Icon
                                name="more-horizontal"
                                type="feather"
                                color="black"
                                size={hp('2.8%')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingLeft: wp('6%') }}>
                            <Icon
                                name="eye-off"
                                type="feather"
                                color="black"
                                size={hp('2.2%')}
                                style={{ transform: [{ rotateX: '180deg' }] }}
                            />
                        </TouchableOpacity>
                    </View>

                }

                centerComponent={{
                    // text: 'Personal',

                }}

            />

            <ScrollView>

                <View style={styles.fonts}>
                    <Text style={{ fontSize: hp('3%'), fontFamily: 'Poppins-Medium' }}>Vehicle & Driving Licence</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: wp('6%') }}>
                    <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Poppins-Regular', color: '#4f4f4f' }}>
                        Last update on 10 Dec 2023
                    </Text>
                    <Image
                        source={infoBlackIcon}
                        style={{ width: wp('5.2%'), height: wp('5.2%'), marginHorizontal: wp('1%'), alignSelf: 'stretch' }}
                    />
                </View>

                <View>

                    <Text style={styles.title}>Driving Licence</Text>

                    <View style={styles.views}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.txt1}>QUALIFIED DRIVING LICENCE</Text>

                        </View>

                        <Text style={styles.txt2}>Class/Issue Date</Text>
                        <Text style={styles.txt3}>3 / 03 SEP 2009</Text>
                        <Text style={styles.txt2}>Status</Text>
                        <Text style={styles.txt3}>VALID</Text>
                        <Text style={styles.txt2}>Certicicate of Merit Status</Text>
                        <Text style={styles.txt3}>NOT ELIGIBLE</Text>
                        <Text style={styles.txt2}>Total Demerit Points</Text>
                        <Text style={styles.txt3}>4</Text>
                        <Text style={styles.txt2}>Photocard Serial Number</Text>
                        <Text style={styles.txt3}>002755739D</Text>

                    </View>


                    <View style={styles.views}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.txt1}>PROVISIONAL DRIVING LICENCE</Text>
                        </View>
                        <Text style={styles.txt3}>NOT HOLDING</Text>
                    </View>

                    <Text style={styles.title}>Vehicle Ownership</Text>
                    <View style={styles.views}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.txt1}>VEHICLE ASSET</Text>
                        </View>
                        <Text style={styles.txt2}>Vehicle Number</Text>
                        <Text style={styles.txt3}>SNJ6253D</Text>
                        <Text style={styles.txt2}>Chassis Number</Text>
                        <Text style={styles.txt3}>WBAKB22080C951540</Text>
                        <Text style={styles.txt2}>IU Label Number</Text>
                        <Text style={styles.txt3}>1124393496</Text>
                        <Text style={styles.txt2}>Road Tax Expiry Date</Text>
                        <Text style={styles.txt3}>06 MAR 2024</Text>


                        <TouchableOpacity style={styles.info}>

                            <Text style={styles.texinfo}>View all</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.info}>
                            <Image
                                source={infoRedIcon}
                                style={styles.iconInfo}
                            />
                            <Text style={styles.texinfo}>View explanatory notes</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ paddingVertical: hp('2.5%') }}></View>
                </View>
            </ScrollView>

        </SafeAreaProvider>

    )
}

export default VehicleDL


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        flex: 1,

    },
    headerLeaf: {
        display: 'flex',
        flexDirection: 'row',
        //paddingTop: hp('0'),
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        //paddingTop: hp('0'),
    },
    fonts: {
        //paddingLeft: 20,
        paddingLeft: wp('6%'),
        paddingTop: hp('2%'),
        paddingBottom: hp('1%')

    },
    title: {
        fontSize: hp('2%'),
        fontFamily: 'Poppins-SemiBold',
        marginTop: hp('4%'),
        paddingLeft: wp('6%')
    },
    txt1: {
        fontSize: hp('2%'),
        fontFamily: 'Poppins-SemiBold',
        color: '#d80b16',
        paddingBottom: hp('2%'),
        //paddingLeft: wp('2%')
    },
    txt2: {
        fontSize: hp('1.5%'),
        fontFamily: 'Poppins-Regular',
        color: '#4f4f4f',

    },
    txt3: {
        fontSize: hp('2%'),
        fontFamily: 'Poppins-Medium',
        paddingBottom: hp('3%'),
    },
    views: {
        backgroundColor: 'white',
        marginTop: hp('1%'),
        paddingLeft: wp('6%'),
        paddingTop: hp('2%'),
        //paddingBottom: hp('2%')
        //paddingRight: wp('6%'),
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingTop: hp('3%'),
        paddingBottom: hp('5%'),
        paddingRight: wp('6%')

    },
    iconInfo: {
        width: wp('5.2%'),
        height: wp('5.2%'),
        marginHorizontal: wp('1%'),

    },
    texinfo: {
        fontSize: wp('3.5%'),
        fontFamily: 'Poppins-SemiBold',
        color: '#d80b16',
    },

});
