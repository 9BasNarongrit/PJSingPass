import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView, TouchableOpacity, Image } from "react-native"
import { Header, Icon, Card } from "react-native-elements";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import infoRedIcon from '../../assets/image/ired.png';
import infoBlackIcon from '../../assets/image/iblack.png';


const Personal = ({ navigation, route }) => {
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
                    <Text style={{ fontSize: hp('3%'), fontFamily: 'Poppins-Medium' }}>Personal</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: wp('6%') }}>
                    <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Poppins-Regular', color: '#4f4f4f' }}>
                        Last update on 09 Dec 2023
                    </Text>
                    <Image
                        source={infoBlackIcon}
                        style={{ width: wp('5.2%'), height: wp('5.2%'), marginHorizontal: wp('1%'), alignSelf: 'stretch' }}
                    />
                </View>

                <View>

                    <Text style={styles.title}>Contact</Text>

                    <View style={styles.views}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: wp('6%') }}>
                            <Text style={styles.txt1}>SINGPASS REGISTERED CONTACT</Text>
                            <TouchableOpacity>
                                <Icon
                                    name="edit-2"
                                    type="feather"
                                    color="black"
                                    size={wp('5%')} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.txt2}>Mobile Number</Text>
                        <Text style={styles.txt3}>80492583</Text>
                        <Text style={styles.txt2}>Email Address</Text>
                        <Text style={styles.txt3}>YONGJIESHENG5353@GMAIL.COM</Text>

                        <TouchableOpacity style={styles.info}>
                            <Image
                                source={infoRedIcon}
                                style={styles.iconInfo}
                            />
                            <Text style={styles.texinfo}>View explanatory notes</Text>
                        </TouchableOpacity>

                    </View>


                    <View style={styles.views}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.txt1}>ADDRESS</Text>
                        </View>

                        <Text style={styles.txt2}>Registered Address</Text>
                        <Text style={styles.txt3}>110A DEPOT ROAD #03-621 SINGAPORE 101110</Text>
                        <Text style={styles.txt2}>Type of HDB</Text>
                        <Text style={styles.txt3}>4-ROOM FLAT (HDB)</Text>

                        <TouchableOpacity style={styles.info}>
                            <Image
                                source={infoRedIcon}
                                style={{ width: 18, height: 18, marginRight: 8 }}
                            />
                            <Text style={styles.texinfo}>View explanatory notes</Text>
                        </TouchableOpacity>

                    </View>


                    <Text style={styles.title}>Singapore Passport</Text>
                    <View style={styles.views}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.txt1}>SINGAPORE INTERNATIONAL PASSPORT</Text>
                        </View>

                        <Text style={styles.txt2}>Passport Number</Text>
                        <Text style={styles.txt3}>K4515703Z</Text>
                        <Text style={styles.txt2}>Passport Expiry Date</Text>
                        <Text style={styles.txt3}>01 NOV 2033</Text>

                    </View>


                    <Text style={styles.title}>Demographic Information</Text>
                    <View style={styles.views}>

                        <Text style={styles.txt2}>Country / Place of Birth</Text>
                        <Text style={styles.txt3}>SINGAPORE</Text>
                        <Text style={styles.txt2}>Race</Text>
                        <Text style={styles.txt3}>CHINESE</Text>
                        <Text style={styles.txt2}>Dialect</Text>
                        <Text style={styles.txt3}>KHEK</Text>

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

export default Personal


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
