import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TextInput, TouchableOpacity, Image } from "react-native"
import { Header, Icon, Input } from "react-native-elements";
import spheader from '../../assets/image/spheader.png';


const Login = ({ navigation, route }) => {
    const onPressNavigate = () => {
        navigation.navigate("Login")
    }

    return (
        <View>
            <View style={{ flex: 1, backgroundColor: 'red' }}>

                <Image style={{ width: 250, height: 60, }}
                    source={spheader}
                />
            </View>
            <View style={{ flex: 1, backgroundColor: 'green'}}>
                <Input>
                </Input>
            </View>
            
        </View>

    );
}

export default Login

/*
const Page3 = ({ navigation, route }) => {
    const [name, setName] = useState("test")
    const [surname, setSurname] = useState("")

    useEffect(() => {
        // onChangeName()
    }, [])

    const onChangeName = () => {
        setName("TESFASGDSHSNJD")
    }

    return (
        <>
            <Header
                leftComponent={
                    <Icon
                        name="chevron-thin-left"
                        type="entypo"
                        color="black"
                        onPress={() => navigation.goBack()}
                    />
                }
                centerComponent={{ text: "Page3", style: { color: 'black' } }}
                innerContainerStyles={{ backgroundColor: "white" }}
                containerStyle={{
                    backgroundColor: "white",
                    borderBottomColor: "white",
                }}
            />
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ paddingVertical: 10 }}>Name : {name}</Text>
                <TextInput onChangeText={(value) => setName(value)} style={{borderWidth:1,borderColor:"black",width:"100%"}} />
            </View>

        </>
    )
}

export default Page3
*/