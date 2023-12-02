import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Page2">
                <Stack.Screen name="Page2" component={Page2} />
                <Stack.Screen name="Page3" component={Page3} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

//teejtjt