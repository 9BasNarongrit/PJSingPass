import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Header, Icon, Input, Text, Button, Card } from "react-native-elements";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import { useFonts } from 'expo-font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Card1 from '../../assets/image/card1.png';

const Home = ({ navigation, route }) => {
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

    return (

        <SafeAreaView style={styles.container}>
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

                    <Grid style={{ backgroundColor: 'blue', marginHorizontal: 20, alignItems: 'flex-start', marginVertical: 10 }}>
                        <Row>
                            <Button
                                title={'NRIC'}
                            />
                            <View style={styles.btnCard}>
                                <Text style={{ fontSize: 10, fontFamily: 'Poppins-Regular' }}>NRIC</Text>
                            </View>
                            <View style={styles.btnCard}>
                                <Text style={{ fontSize: 10, fontFamily: 'Poppins-Regular' }}>NRIC</Text>
                            </View>
                            <View style={styles.btnCard}>
                                <Text style={{ fontSize: 10, fontFamily: 'Poppins-Regular' }}>NRIC</Text>
                            </View>
                        </Row>
                    </Grid>

                    <Swiper style={{ alignSelf: 'center', height: 200 }}>
                        <Card style={{ backgroundColor: 'red' }}>
                            <Image
                                source={Card1}
                                style={{ width: 320, height: 200, alignSelf: 'center' }}
                            />
                        </Card>
                    </Swiper>



                </View>


                <View style={{ height: 140 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: 'black' }}>My Profile</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#d80b16' }}>View all</Text>
                        </TouchableOpacity>
                    </View>

                    {/* 
                    <Swiper
                        style={{ backgroundColor: 'black', height: 120, paddingVertical: 20 }}
                        showsButtons={false}
                        showsPagination={false}
                        loop={false}
                    >

                    </Swiper>*/}


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

