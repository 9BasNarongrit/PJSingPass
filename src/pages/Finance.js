import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView, TouchableOpacity, Image } from "react-native"
import { Header, Icon, Card, ListItem } from "react-native-elements";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import infoRedIcon from '../../assets/image/ired.png';
import infoBlackIcon from '../../assets/image/iblack.png';


const Finance = ({ navigation, route }) => {
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
                    <Text style={{ fontSize: hp('3%'), fontFamily: 'Poppins-Medium' }}>Finance</Text>
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

                    <Text style={styles.title}>Income</Text>

                    <View style={styles.views}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.txt1}>NOTICE OF ASSESSMENT</Text>
                            {/* 
                            <TouchableOpacity>
                                <Icon
                                    name="edit-2"
                                    type="feather"
                                    color="black"
                                    size={18} />
                            </TouchableOpacity>
                            */}
                        </View>

                        <Text style={styles.txt2}>Year of Assessment</Text>
                        <Text style={styles.txt3}>2023</Text>
                        <Text style={styles.txt2}>Type of Assessment</Text>
                        <Text style={styles.txt3}>ORIGINAL</Text>
                        <Text style={styles.txt2}>Yearly Assessment Icome</Text>
                        <Text style={styles.txt3}>$437.00</Text>


                        <View style={{ borderColor: '#f4f4f4', borderTopWidth: wp('0.3%'), paddingBottom: hp('2%') }}></View>

                        <Text style={styles.txt1}>COMPONENT OF ASSESSABLE INCOME</Text>
                        <Text style={styles.txt2}>Exployment Income</Text>
                        <Text style={styles.txt3}>$440.00</Text>
                        <Text style={styles.txt2}>Trade Icome</Text>
                        <Text style={styles.txt3}>$0.00</Text>
                        <Text style={styles.txt2}>Property Icome</Text>
                        <Text style={styles.txt3}>$0.00</Text>
                        <Text style={styles.txt2}>Interest Icome</Text>
                        <Text style={styles.txt3}>$0.00</Text>
                        {/*
                        <TouchableOpacity style={styles.info}>
                            <Image
                                source={infoRedIcon}
                                style={styles.iconInfo}
                            />
                            <Text style={styles.texinfo}>View explanatory notes</Text>
                        </TouchableOpacity>
                        */}
                    </View>


                    <View style={styles.views}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.txt1}>NOTICE OF ASSESSMENT</Text>

                        </View>

                        <Text style={styles.txt2}>Year of Assessment</Text>
                        <Text style={styles.txt3}>2022</Text>
                        <Text style={styles.txt2}>Type of Assessment</Text>
                        <Text style={styles.txt3}>ORIGINAL</Text>
                        <Text style={styles.txt2}>Yearly Assessment Icome</Text>
                        <Text style={styles.txt3}>$21,304.00</Text>


                        <View style={{ borderColor: '#f4f4f4', borderTopWidth: wp('0.3%'), paddingBottom: hp('2%') }}></View>

                        <Text style={styles.txt1}>COMPONENT OF ASSESSABLE INCOME</Text>
                        <Text style={styles.txt2}>Exployment Income</Text>
                        <Text style={styles.txt3}>$21,319.00</Text>
                        <Text style={styles.txt2}>Trade Icome</Text>
                        <Text style={styles.txt3}>$0.00</Text>
                        <Text style={styles.txt2}>Property Icome</Text>
                        <Text style={styles.txt3}>$0.00</Text>
                        <Text style={styles.txt2}>Interest Icome</Text>
                        <Text style={styles.txt3}>$0.00</Text>

                    </View>

                    <View style={styles.views}>

                        <Text style={styles.txt2}>Ownership of Private Residential Property</Text>
                        <Text style={styles.txt3}>NO</Text>
                        <TouchableOpacity style={styles.info}>
                            <Image
                                source={infoRedIcon}
                                style={styles.iconInfo}
                            />
                            <Text style={styles.texinfo}>View explanatory notes</Text>
                        </TouchableOpacity>

                    </View>


                    <Text style={styles.title}>CPF</Text>
                    <View style={styles.views}>
                        <Text style={styles.txt1}>CPF ACCOUNT BALANCE</Text>

                        <Text style={styles.txt2}>CPF Ordinary Account</Text>
                        <Text style={styles.txt3}>$0.78</Text>
                        <Text style={styles.txt2}>CPF Special Account</Text>
                        <Text style={styles.txt3}>$14,213.05</Text>
                        <Text style={styles.txt2}>Medisave Account</Text>
                        <Text style={styles.txt3}>$16,030.12</Text>

                    </View>



                    <View style={styles.views}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.txt1}>CPF CONTRIBUTION HISTORY</Text>

                        </View>

                        <Text style={styles.txt2}>Paid On</Text>
                        <Text style={styles.txt3}>10 MAR 2023</Text>
                        <Text style={styles.txt2}>Employer</Text>
                        <Text style={styles.txt3}>AAA RACING PTE. LTD.</Text>
                        <Text style={styles.txt2}>For Month</Text>
                        <Text style={styles.txt3}>NOV 2022</Text>
                        <Text style={styles.txt2}>Amount</Text>
                        <Text style={styles.txt3}>$518.00</Text>

                        <View style={{ borderColor: '#f4f4f4', borderTopWidth: wp('0.3%'), paddingBottom: hp('2%') }}></View>

                        <Text style={styles.txt2}>Paid On</Text>
                        <Text style={styles.txt3}>10 MAR 2023</Text>
                        <Text style={styles.txt2}>Employer</Text>
                        <Text style={styles.txt3}>AAA RACING PTE. LTD.</Text>
                        <Text style={styles.txt2}>For Month</Text>
                        <Text style={styles.txt3}>DEC 2023</Text>
                        <Text style={styles.txt2}>Amount</Text>
                        <Text style={styles.txt3}>$518.00</Text>

                        <View style={{ borderColor: '#f4f4f4', borderTopWidth: wp('0.3%'), paddingBottom: hp('2%') }}></View>

                        <Text style={styles.txt2}>Paid On</Text>
                        <Text style={styles.txt3}>10 MAR 2023</Text>
                        <Text style={styles.txt2}>Employer</Text>
                        <Text style={styles.txt3}>AAA RACING PTE. LTD.</Text>
                        <Text style={styles.txt2}>For Month</Text>
                        <Text style={styles.txt3}>JAN 2023</Text>
                        <Text style={styles.txt2}>Amount</Text>
                        <Text style={styles.txt3}>$518.00</Text>


                        <TouchableOpacity style={{
                            alignItems: 'center',
                            paddingRight: wp('7%'),
                            paddingTop: wp('3%'),
                            paddingBottom: hp('2%')
                        }}>

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


                    <View style={{ paddingTop: hp('1%') }}>
                        <ListItem.Accordion
                            content={
                                <>
                                    <ListItem.Content>
                                        <ListItem.Title style={{
                                            color: '#d80b16',
                                            paddingLeft: wp('1.5%'),
                                            fontSize: hp('2%'),
                                            fontFamily: 'Poppins-SemiBold',
                                        }}>

                                            CPF ACCOUNT BALANCE
                                        </ListItem.Title>
                                    </ListItem.Content>

                                </>
                            }
                            isExpanded={expanded1}
                            onPress={() => {
                                setExpanded1(!expanded1);
                            }}
                        >
                            <View style={{ paddingLeft: wp('6%'), backgroundColor: 'white' }}>
                                <Text style={styles.txt2}>Address</Text>
                                <Text style={styles.txt3}>110A DEPOT ROAD DEPOT HEIGHTS #003-621 SINGAPORE 101110</Text>
                                <Text style={styles.txt2}>Principal Withdrawal</Text>
                                <Text style={styles.txt3}>$40,910.12</Text>
                                <Text style={styles.txt2}>Accrued Interest Amount</Text>
                                <Text style={styles.txt3}>$5,718.33</Text>
                                <Text style={styles.txt2}>Monthly Instalment Amount</Text>
                                <Text style={styles.txt3}>$1,000.00</Text>
                                <Text style={styles.txt2}>Total Amount of CPF Allowed for Property</Text>
                                <Text style={styles.txt3}>$0.00</Text>
                            </View>

                        </ListItem.Accordion>
                    </View>

                    <View style={{ paddingTop: hp('1%') }}>
                        <ListItem.Accordion
                            content={
                                <>
                                    <ListItem.Content>
                                        <ListItem.Title style={{
                                            color: '#d80b16',
                                            paddingLeft: wp('1.5%'),
                                            fontSize: hp('2%'),
                                            fontFamily: 'Poppins-SemiBold',
                                        }}>

                                            CPF INVESTMENT SCHEME (CPFIS) - OA & SA
                                        </ListItem.Title>
                                    </ListItem.Content>
                                </>
                            }
                            isExpanded={expanded2}
                            onPress={() => {
                                setExpanded2(!expanded2);
                            }}
                        >
                            <View style={{ paddingLeft: wp('6%'), backgroundColor: 'white' }}>
                                <Text style={styles.txt2}>Self-Awareness Questionnaire (SAQ) Participation Status</Text>
                                <Text style={styles.txt3}>DID NOT PARTICIPATE</Text>
                            </View>

                        </ListItem.Accordion>
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

export default Finance


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
