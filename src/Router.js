import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from "./pages/Logo"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Page3 from "./pages/Page3";
//import Documents from "./pages/Documents";
import Personal from "./pages/Personal";
import Finance from "./pages/Finance";
import VehicleDL from "./pages/Vehicle&DL";
import Family from "./pages/Family";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Logo" component={Logo} />
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Page3" component={Page3}/>
                {/*<Stack.Screen name="Documents" component={Documents}/>*/}
                <Stack.Screen name="Personal" component={Personal}/>
                <Stack.Screen name="Finance" component={Finance}/>
                <Stack.Screen name="VehicleDL" component={VehicleDL}/>
                <Stack.Screen name="Family" component={Family}/>
                

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

//teejtjt