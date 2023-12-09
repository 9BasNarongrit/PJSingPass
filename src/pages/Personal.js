import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView, TouchableOpacity } from "react-native"
import { Header, Icon, Card } from "react-native-elements";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';


const Personal = ({ navigation, route }) => {
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
                innerContainerStyles={{ backgroundColor: "red" }}
                containerStyle={{
                    backgroundColor: "#f4f4f4",
                    //borderBottomColor: "black",
                }}
                statusBarProps={{ backgroundColor: '#f4f4f4' }}
                leftComponent={

                    <TouchableOpacity>
                        <Icon
                            name="arrow-left"
                            type="feather"
                            color="black"
                        //onPress={() => navigation.goBack()}
                        />
                    </TouchableOpacity>
                }

                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity>
                            <Icon
                                name="more-horizontal"
                                type="feather"
                                color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10 }}>
                            <Icon
                                name="eye-off"
                                type="feather"
                                color="black"
                                size={20}
                                style={{ paddingLeft: 15, transform: [{ rotateX: '180deg' }] }}
                            />
                        </TouchableOpacity>
                    </View>

                }

                centerComponent={{
                    text: 'Personal'
                }}

            />

            <ScrollView>

                <View style={styles.fonts}>
                    <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold' }}>Personal</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular' }}>Last update on 08 Nov 2566 BE</Text>

                </View>

                <View>

                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-SemiBold', marginTop: 30, paddingLeft: 20 }}>Contact</Text>

                    <View style={{ backgroundColor: 'white', marginTop: 5, paddingHorizontal: 20, paddingVertical: 18, paddingRight: 20, }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold', color: '#d80b16', paddingBottom: 10 }}>SINGPASS REGISTERED CONTACT</Text>
                            <TouchableOpacity>
                                <Icon
                                    name="edit-2"
                                    type="feather"
                                    color="black"
                                    size={20} />
                            </TouchableOpacity>
                        </View>

                        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>Mobile Number</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium' }}>80492583 {"\n"}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>Email Address</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium' }}>YONGJIESHENG5353@GMAIL.COM{"\n"}</Text>

                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 75, padding: 40 }}>
                            
                            {/*
                                <Icon
                                    name="info"
                                    type="feather"
                                    color="black"
                                    size={20} />*/}

                            <Text style={{ fontSize: 16, fontFamily: 'serif', color: '#d80b16', paddingHorizontal: 8.5, borderColor: '#d80b16', borderWidth: 2, borderRadius: 50, width: 22, height: 22, }}>i</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', color: '#d80b16', }}>View explanatory notes</Text>
                        </TouchableOpacity>

                    </View>


                    <View style={{ backgroundColor: 'white', marginTop: 5, paddingHorizontal: 20, paddingVertical: 18, paddingRight: 20, }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold', color: '#d80b16', paddingBottom: 10 }}>ADDRESS</Text>
                            {/* 
                            <TouchableOpacity>
                                <Icon
                                    name="edit-2"
                                    type="feather"
                                    color="black"
                                    size={20} />
                            </TouchableOpacity>
                            */}
                        </View>

                        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>Registered Address</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold' }}>110A DEPOT ROAD #03-621 SINGAPORE 101110 {"\n"}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>Type of HDB</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold' }}>4-ROOM FLAT (HDB){"\n"}</Text>

                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 75, padding: 40 }}>
                            
                            {/*
                                <Icon
                                    name="info"
                                    type="feather"
                                    color="black"
                                    size={20} />*/}

                            <Text style={{ fontSize: 16, fontFamily: 'serif', color: '#d80b16', paddingHorizontal: 8.5, borderColor: '#d80b16', borderWidth: 2, borderRadius: 50, width: 22, height: 22, }}>i</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', color: '#d80b16', }}>View explanatory notes</Text>
                        </TouchableOpacity>

                    </View>


                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-SemiBold', marginTop: 30, paddingLeft: 20 }}>Singapore Passport</Text>
                    <View style={{ backgroundColor: 'white', marginTop: 5, paddingHorizontal: 20, paddingVertical: 18, paddingRight: 20, }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold', color: '#d80b16', paddingBottom: 10 }}>SINGAPORE INTERNATIONAL PASSPORT</Text>
                            {/* 
                            <TouchableOpacity>
                                <Icon
                                    name="edit-2"
                                    type="feather"
                                    color="black"
                                    size={20} />
                            </TouchableOpacity>
                            */}
                        </View>

                        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>Passport Number</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold' }}>K1572206G {"\n"}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>Passport Expiry Date</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold' }}>22 JUN 2025{"\n"}</Text>

                    </View>


                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-SemiBold', marginTop: 30, paddingLeft: 20 }}>Demographic Information</Text>
                    <View style={{ backgroundColor: 'white', marginTop: 5, paddingHorizontal: 20, paddingVertical: 18, paddingRight: 20, }}>

                        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>Country / Place of Birth</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold' }}>SINGAPORE {"\n"}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>Race</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold' }}>CHINESE{"\n"}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>Dialect</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold' }}>KHEK{"\n"}</Text>

                    </View>

                    



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
        backgroundColor: '#f4f4f4'
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    fonts: {
        //paddingLeft: 20,
        marginHorizontal: 20

    },

});
