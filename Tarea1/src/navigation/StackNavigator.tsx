import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";
import Home from "../screens/Home";
import Register from "../screens/Register";
import TabsNavigator from "./TabsNavigator";

// 1- Declarar el tipado de las pantallas con sus parametros
export type RootStackParamList = {
    LoginScreen: undefined; 
    RegisterScreen: undefined;
    HomeScreen: {email: string}; 
    UserTabs: undefined; 
};

// 2- Crear el stack navigator y manejas la navegacion
const Stack = createNativeStackNavigator<RootStackParamList>();

// 3- Utilizar el stack de navegacion
export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={Login} /> 
            <Stack.Screen name="RegisterScreen" component={Register} />
            <Stack.Screen name="HomeScreen" component={Home} />       
            <Stack.Screen name="UserTabs" component={TabsNavigator}/>
        </Stack.Navigator>
    ); 
}