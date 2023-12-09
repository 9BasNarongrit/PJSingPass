import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Header, Icon, Input, Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import { useFonts } from 'expo-font';

const Home = ({ navigation, route }) => {
    const onPressNavigate = () => {
        navigation.navigate("Login")
    }
/*
    const [fontsLoaded] = useFonts({
        'Poppins-Black': require('../../assets/fonts/Poppins-Black.ttf'),
    });*/

    return (

        <SafeAreaView>
            <ScrollView>
                <View>
                    <Icon style={{ paddingTop: 10, paddingBottom: 10, paddingRight: 20, alignSelf: 'flex-end' }}

                        name='gear'
                        type='octicon'
                        color='black'
                        size={25}
                    //onPress={() => console.log('hello')} // 
                    />
                </View>

                <View style={styles.fonts}>
                    <Text style={{ fontSize: 16 }}>Welcome back,</Text>
                    <Text style={{ fontSize: 24 }}>Yong Jie Shang</Text>
                </View>

                {/*----------------------------------CARD----------------------------------*/}

                <View>
                    <Text style={styles.fonts}>My Profile</Text>

                    <ScrollView horizontal={true} >

                        <View style={styles.btMenu}>
                         
                                <Icon
                                    name='file-directory'
                                    type='octicon'
                                    color='red'
                                    size={25}

                                />
                          
                                <Text>Document</Text>

                        </View>
                        <View style={styles.btMenu}>
                         
                                <Icon
                                    name='file-directory'
                                    type='octicon'
                                    color='red'
                                    size={25}

                                />
                          
                                <Text>Document</Text>

                        </View>
                        <View style={styles.btMenu}>
                         
                                <Icon
                                    name='file-directory'
                                    type='octicon'
                                    color='red'
                                    size={25}

                                />
                          
                                <Text>Document</Text>

                        </View>
                        <View style={styles.btMenu}>
                         
                                <Icon
                                    name='file-directory'
                                    type='octicon'
                                    color='red'
                                    size={25}

                                />
                          
                                <Text>Document</Text>

                        </View>


                    </ScrollView>
                </View>

            </ScrollView>
        </SafeAreaView>


    );
}

export default Home

const styles = StyleSheet.create({
    fonts: {
        paddingLeft: 20,

    },
    btMenu: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        margin: 20,


    },

});

