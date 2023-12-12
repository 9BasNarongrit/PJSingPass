import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView, TouchableOpacity, Image } from "react-native"
import { Header, Icon, Card, ListItem } from "react-native-elements";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import infoRedIcon from '../../assets/image/ired.png';
import infoBlackIcon from '../../assets/image/iblack.png';


const Property = ({ navigation, route }) => {
    const [expanded1, setExpanded1,] = useState(false)
    const [expanded2, setExpanded2,] = useState(false)

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
                    <Text style={{ fontSize: hp('3%'), fontFamily: 'Poppins-Medium' }}>Property</Text>
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

                    <Text style={styles.title}>HDB Ownership</Text>

                    <View style={styles.views}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.txt1}>HDB DETAILS</Text>
                        </View>

                        <Text style={styles.txt2}>HDB Address</Text>
                        <Text style={styles.txt3}>110A DDEPOT RD #03-621 SINGAPORE 101110</Text>
                        <Text style={styles.txt2}>Type of HDB ownership</Text>
                        <Text style={styles.txt3}>4-ROOM FLAT (HDB)</Text>
                        <Text style={styles.txt2}>Date of Purchase</Text>
                        <Text style={styles.txt3}>31 MAR 2017</Text>
                        <Text style={styles.txt2}>Terms of Lease</Text>
                        <Text style={styles.txt3}>99 YEARS</Text>
                        <Text style={styles.txt2}>Date of Ownership Transfer</Text>
                        <Text style={styles.txt3}>NO RECORDS</Text>
                        <Text style={styles.txt2}>Number of Owner(s)</Text>
                        <Text style={styles.txt3}>1</Text>
                        <Text style={styles.txt2}>Lease Commencement</Text>
                        <Text style={styles.txt3}>01 NOV 2017</Text>
                        <Text style={styles.txt2}>Purchase Price</Text>
                        <Text style={styles.txt3}>$465,600.00</Text>

                        <View style={{ borderColor: '#f4f4f4', borderTopWidth: wp('0.3%'), paddingBottom: hp('2%') }}></View>

                        <Text style={styles.txt1}>HDB LOAN DETAILS</Text>
                        <Text style={styles.txt2}>HDB Loan Granted</Text>
                        <Text style={styles.txt3}>$372,400.00</Text>
                        <Text style={styles.txt2}>Loan Repayment Period</Text>
                        <Text style={styles.txt3}>25 YEARS</Text>
                        <Text style={styles.txt2}>Outstanding Load Balance</Text>
                        <Text style={styles.txt3}>18 YEARS 4 MONTHS</Text>
                        <Text style={styles.txt2}>Monthly Loan Instalment</Text>
                        <Text style={styles.txt3}>$1,834.00</Text>
                        <Text style={styles.txt2}>Outstanding Instalment</Text>
                        <Text style={styles.txt3}>$16,346.00</Text>
                        
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

export default Property


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
