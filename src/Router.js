import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet } from "react-native";

import Logo from "./pages/Logo"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Page3 from "./pages/Page3";
//import Documents from "./pages/Documents";
import Personal from "./pages/Personal";
import Finance from "./pages/Finance";
import VehicleDL from "./pages/Vehicle&DL";
import Family from "./pages/Family";
import Education from "./pages/Education";
import Property from "./pages/Property";
import RegistersOE from "./pages/RegistersOfElectors";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Logo" component={Logo} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Page3" component={Page3} />
                {/*<Stack.Screen name="Documents" component={Documents}/>*/}
                <Stack.Screen name="Personal" component={Personal} options={{
                    headerShown: false,
                    presentation: 'containedTransparentModal',
                    animationTypeForReplace: 'push',
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name="Finance" component={Finance} options={styles.styleOptions}/>
                <Stack.Screen name="VehicleDL" component={VehicleDL} />
                <Stack.Screen name="Family" component={Family} />
                <Stack.Screen name="Education" component={Education} />
                <Stack.Screen name="Property" component={Property} />
                <Stack.Screen name="RegistersOE" component={RegistersOE} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

//teejtjt

const styles = StyleSheet.create({
    styleOptions: {
        headerShown: false,
        presentation: 'modal',
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
    },
})