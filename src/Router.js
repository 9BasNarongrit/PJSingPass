import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from "./pages/Logo"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Page3 from "./pages/Page3";
import Personal from "./pages/Personal";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Personal">
                <Stack.Screen name="Logo" component={Logo} />
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Page3" component={Page3}/>
                <Stack.Screen name="Personal" component={Personal}/>
                

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

//teejtjt