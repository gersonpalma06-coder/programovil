    import React from "react"
    import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
    import Profile from "../screens/features/Profile";
    import Settings from "../screens/features/Settings";
    import Home from "../screens/Home";
    import { Ionicons } from '@expo/vector-icons';

    //1. declarar el tipado de las pantallas con sus parametros
    export type TabsParamList ={
        Profile: { email?: string },
        Settings: undefined, 
        HomeTab: {email?: string},
    };

    //2. crear el tabs navigator encargado de manejar la navegacion por pestañas
    const Tab = createBottomTabNavigator<TabsParamList>();

    // 3. utilizar el navegador por tabs (recibiendo route en los props)
export default function TabNavigator({ route }: any) {
    const userEmail = route?.params?.email;

    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: keyof typeof Ionicons.glyphMap = "help-outline";

                        if (route.name === "Profile") {
                            iconName = focused ? "person" : "person-outline";
                        } else if (route.name === "Settings") {
                            iconName = focused ? "settings" : "settings-outline";
                        } else if (route.name === "HomeTab") {
                            iconName = focused ? "home" : "home-outline";
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen 
                name='Profile' 
                component={Profile} 
                initialParams={{ email: userEmail }}
            />
                <Tab.Screen name='Settings' component={Settings}/>
                <Tab.Screen 
                name='HomeTab' 
                component={Home} 
                initialParams={{ email: userEmail }}
            />
            </Tab.Navigator>
        )
    }