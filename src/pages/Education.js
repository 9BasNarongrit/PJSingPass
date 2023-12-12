import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView, TouchableOpacity, Image } from "react-native"
import { Header, Icon, Card } from "react-native-elements";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import infoRedIcon from '../../assets/image/ired.png';
import infoBlackIcon from '../../assets/image/iblack.png';


const Education = ({ navigation, route }) => {
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
                    <Text style={{ fontSize: hp('3%'), fontFamily: 'Poppins-Medium' }}>Education</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: wp('6%') }}>
                    <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Poppins-Regular', color: '#4f4f4f' }}>
                        Last update on 11 Dec 2023
                    </Text>
                    <Image
                        source={infoBlackIcon}
                        style={{ width: wp('5.2%'), height: wp('5.2%'), marginHorizontal: wp('1%'), alignSelf: 'stretch' }}
                    />
                </View>

                <View>

                    <Text style={styles.title}>Singapore-Cambridge Examination</Text>

                    <View style={styles.views}>
                        <Text style={styles.txt1}>GENERAL CERTIFICATE OF EDUCATION{'\n'}ORDINARY LEVEL</Text>

                        <Text style={styles.txt2}>Attained</Text>
                        <Text style={styles.txt3}>2002</Text>

                        <View style={styles.txtRow}>
                            <Text style={styles.txt2}>Subject(s)</Text>
                            <Text style={styles.txt2}>Grade</Text>
                        </View>
                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>ENGLISH LANGUAGE</Text>
                            <Text style={styles.txt3}>D SEVEN</Text>
                        </View>

                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>ADDITIONAL MATHEMATICS</Text>
                            <Text style={styles.txt3}>F NINE</Text>
                        </View>

                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>MATHEMATICS D</Text>
                            <Text style={styles.txt3}>D SEVEN</Text>
                        </View>

                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>SCIENCE (PHY/CHEM)</Text>
                            <Text style={styles.txt3}>F NINE</Text>
                        </View>

                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>CHINESE (O)</Text>
                            <Text style={styles.txt3}>C FIVE</Text>
                        </View>

                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>ORAL/AURAL</Text>
                            <Text style={styles.txt3}>MERIT</Text>
                        </View>

                        <TouchableOpacity style={styles.info}>
                            <Image
                                source={infoRedIcon}
                                style={styles.iconInfo}
                            />
                            <Text style={styles.texinfo}>View explanatory notes</Text>
                        </TouchableOpacity>

                    </View>


                    <View style={styles.views}>
                        <Text style={styles.txt1}>GENERAL CERTIFICATE OF EDUCATION{'\n'}ORDINARY LEVEL</Text>
                        
                        <Text style={styles.txt2}>Attained</Text>
                        <Text style={styles.txt3}>2002</Text>

                        <View style={styles.txtRow}>
                            <Text style={styles.txt2}>Subject(s)</Text>
                            <Text style={styles.txt2}>Grade</Text>
                        </View>
                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>ENGLISH LANGUAGE</Text>
                            <Text style={styles.txt3}>D SEVEN</Text>
                        </View>

                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>MATHEMATICS D</Text>
                            <Text style={styles.txt3}>D SEVEN</Text>
                        </View>

                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>CHINESE (O)</Text>
                            <Text style={styles.txt3}>C FIVE</Text>
                        </View>

                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>ORAL/AURAL</Text>
                            <Text style={styles.txt3}>MERIT</Text>
                        </View>

                        <TouchableOpacity style={styles.info}>
                            <Image
                                source={infoRedIcon}
                                style={styles.iconInfo}
                            />
                            <Text style={styles.texinfo}>View explanatory notes</Text>
                        </TouchableOpacity>

                    </View>


                    <View style={styles.views}>
                        <Text style={styles.txt1}>GENERAL CERTIFICATE OF EDUCATION{'\n'}NORMAL LEVEL</Text>

                        <Text style={styles.txt2}>Attained</Text>
                        <Text style={styles.txt3}>2001</Text>

                        <View style={styles.txtRow}>
                            <Text style={styles.txt2}>Subject(s)</Text>
                            <Text style={styles.txt2}>Grade</Text>
                        </View>
                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>ENGLISH LANGUAGE SYLLABUS T{'\n'}(N)</Text>
                            <Text style={styles.txt3}>FIVE</Text>
                        </View>

                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>MATHEMATICS SYLLABUS T (N)</Text>
                            <Text style={styles.txt3}>FOUR</Text>
                        </View>

                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>SCIENCE SYLLABUS T (N)</Text>
                            <Text style={styles.txt3}>THREE</Text>
                        </View>

                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>TECHNICAL STUDIES (N)</Text>
                            <Text style={styles.txt3}>TWO</Text>
                        </View>

                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>COMPUTER APPLICATIONS (N)</Text>
                            <Text style={styles.txt3}>TWO</Text>
                        </View>

                        <View  style={styles.txtRow}>
                            <Text style={styles.txt3}>BASIC CHINESE (N)</Text>
                            <Text style={styles.txt3}>THREE</Text>
                        </View>

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

export default Education


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
    txtRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingRight: wp('6%'), 
    },

});
