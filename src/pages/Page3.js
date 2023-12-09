/*import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TextInput } from "react-native"
import { Header, Icon, Input } from "react-native-elements";

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

export default Page3*/


import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7CA1B4",
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
  },
  square: {
    backgroundColor: "#7cb48f",
    width: 100,
    height: 100,
    margin: 4,
  },
});


