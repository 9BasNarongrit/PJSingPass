import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView, TouchableOpacity, Image } from "react-native"
import { Header, Icon, Card } from "react-native-elements";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import infoRedIcon from '../../assets/image/ired.png';
import infoBlackIcon from '../../assets/image/iblack.png';


const ResitersOE = ({ navigation, route }) => {
    //const [name, setName] = useState(0)

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
                                size={ hp('2.8%')}
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
                    <Text style={{ fontSize: hp('3%'), fontFamily: 'Poppins-Medium' }}>Registers of Electors</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: wp('6%') }}>
                    <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Poppins-Regular', color: '#4f4f4f' }}>
                        Last update on 12 Dec 2023
                    </Text>
                    <Image
                        source={infoBlackIcon}
                        style={{ width: wp('5.2%'), height: wp('5.2%'), marginHorizontal: wp('1%'), alignSelf: 'stretch' }}
                    />
                </View>

                <View>

                    <Text style={styles.title}>Perticulars in Registers of Electors</Text>

                    <View style={styles.views}>
                        <Text style={styles.txt2}>Name</Text>
                        <Text style={styles.txt3}>YONG JIE SHENG</Text>
                        <Text style={styles.txt2}>NRIC Number</Text>
                        <Text style={styles.txt3}>S8512031Z</Text>
                        <Text style={styles.txt2}>Sex</Text>
                        <Text style={styles.txt3}>MALE</Text>
                        <Text style={styles.txt2}>Address (in the Registers of Electors)</Text>
                        <Text style={styles.txt3}>APT BLK 110A DEPOT ROAD #03-621 SINGAPORE{'\n'}101110</Text>
                        <Text style={styles.txt2}>Last Change of Address</Text>
                        <Text style={styles.txt3}>26 OCT 2017</Text>

                        <TouchableOpacity style={styles.info}>
                            <Image
                                source={infoRedIcon}
                                style={styles.iconInfo}
                            />
                            <Text style={styles.texinfo}>View explanatory notes</Text>
                        </TouchableOpacity>

                    </View>


                    <Text style={styles.title}>Voting Information</Text>
                    <View style={styles.views}>

                        <Text style={styles.txt2}>Voting Eligibility</Text>
                        <Text style={styles.txt3}>YES</Text>
                        <Text style={styles.txt2}>Electoral Division</Text>
                        <Text style={styles.txt3}>WE - WEST COAST</Text>
                        <Text style={styles.txt2}>Voter Serial Number</Text>
                        <Text style={styles.txt3}>1795</Text>
                        <Text style={styles.txt2}>Polling District</Text>
                        <Text style={styles.txt3}>WE - WE46</Text>

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

export default ResitersOE


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
        fontSize: hp('2.4%'),
        fontFamily: 'Poppins-SemiBold',
        marginTop: hp('3%'),
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
        paddingBottom: hp('2.8%'),
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
        justifyContent: 'center',
        //alignSelf: 'center',
        //alignItems: 'flex-start',
        paddingTop: hp('3%'),
        paddingBottom: hp('5%'),
        paddingRight: wp('8.5%')
    },
    iconInfo: {
        width: wp('5.2%'), 
        height: wp('5.2%'),
        marginHorizontal: wp('1%'), 
        
    },
    texinfo: {
        fontSize: wp('3.5%'),
        fontFamily: 'Poppins-Medium',
        color: '#d80b16',
    },

});
