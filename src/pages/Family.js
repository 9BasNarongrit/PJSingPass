import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView, TouchableOpacity, Image } from "react-native"
import { Header, Icon, Card } from "react-native-elements";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import infoRedIcon from '../../assets/image/ired.png';
import infoBlackIcon from '../../assets/image/iblack.png';


const Family = ({ navigation, route }) => {
    //const [name, setName] = useState("test")

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
                    <Text style={{ fontSize: hp('3%'), fontFamily: 'Poppins-Medium' }}>Family</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: wp('6%') }}>
                    <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Poppins-Regular', color: '#4f4f4f' }}>
                        Last update on 03 Dec 2023
                    </Text>
                    <Image
                        source={infoBlackIcon}
                        style={{ width: wp('5.2%'), height: wp('5.2%'), marginHorizontal: wp('1%'), alignSelf: 'stretch' }}
                    />
                </View>

                <View>

                    <Text style={styles.title}>Marital Infomation</Text>

                    <View style={styles.views}>

                        <Text style={styles.txt2}>Marital Status</Text>
                        <Text style={styles.txt3}>SINGLE</Text>
                        <Text style={styles.txt2}>Date of Marriage</Text>
                        <Text style={styles.txt3}></Text>
                        <Text style={styles.txt2}>Marriage Certificate Number</Text>
                        <Text style={styles.txt3}></Text>
                        <Text style={styles.txt2}>Country / Place of Marriage</Text>
                        <Text style={styles.txt3}></Text>
                        


                        <TouchableOpacity style={styles.info}>
                            <Image
                                source={infoRedIcon}
                                style={styles.iconInfo}
                            />
                            <Text style={styles.texinfo}>View explanatory notes</Text>
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.title}>Local Registered Birth Records</Text>
                    <View style={styles.views}>
                        <Text style={styles.txt2}>Name</Text>
                        <Text style={styles.txt3}>YONG BO WEN ALEXANDER</Text>
                        <Text style={styles.txt2}>Birth Certificate Number</Text>
                        <Text style={styles.txt3}>T1709902C</Text>
                        <Text style={styles.txt2}>Sex</Text>
                        <Text style={styles.txt3}>MALE</Text>
                        <Text style={styles.txt2}>Date of Birth</Text>
                        <Text style={styles.txt3}>03 APR 2017</Text>
                        <Text style={styles.txt2}>Tim of Birth</Text>
                        <Text style={styles.txt3}>9:22 AM</Text>
                        <Text style={styles.txt2}>Race</Text>
                        <Text style={styles.txt3}>CHINESE</Text>
                        <Text style={styles.txt2}>Secondary Race</Text>
                        <Text style={styles.txt3}>THAI</Text>
                        <Text style={styles.txt2}>Dialect</Text>
                        <Text style={styles.txt3}>KHEK</Text>
                        <Text style={styles.txt2}>For Official Use</Text>
                        <Text style={styles.txt3}>THE CHID IS A CITIZEN OF SINGAPORE AT THE TIME OF BIRTH</Text>
                        <Text style={styles.txt2}>Fulfilled Preschool Vaccination Minimum Requirement</Text>
                        <Text style={styles.txt3}>YES</Text>

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

            {/* 
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ paddingVertical: 10 }}>Name : {name}</Text>
                    <TextInput onChangeText={(value) => setName(value)} style={{ borderWidth: 1, borderColor: "black", width: "100%" }} />
                </View>
                */}

        </SafeAreaProvider>

    )
}

export default Family


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
        paddingTop: hp('1%'),
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
