import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/features/Profile";
import Settings from "../screens/features/Settings";
import Home from "../screens/Home";
import { Ionicons } from '@expo/vector-icons';
import ExploreScreen from "../screens/ExploreScreen"; 
import { useTheme } from '../contexts/ThemeContext';

export type TabsParamList = {
    Profile: { email?: string },
    Settings: undefined, 
    HomeTab: { email?: string },
    Explore: undefined,
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabNavigator({ route }: any) {
    const userEmail = route?.params?.email;
    
    const { colors } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarStyle: { backgroundColor: colors.surface },
                headerStyle: { backgroundColor: colors.surface },
                headerTintColor: colors.text,
                
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = "help-outline";

                    if (route.name === "Profile") {
                        iconName = focused ? "person" : "person-outline";
                    } else if (route.name === "Settings") {
                        iconName = focused ? "settings" : "settings-outline";
                    } else if (route.name === "HomeTab") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Explore") {
                        iconName = focused ? "grid" : "grid-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen 
                name='HomeTab' 
                component={Home} 
                initialParams={{ email: userEmail }}
                options={{ title: 'Inicio' }}
            />
            <Tab.Screen 
                name='Explore' 
                component={ExploreScreen}
                options={{ title: 'Explorar' }}
            />
            <Tab.Screen 
                name='Profile' 
                component={Profile} 
                initialParams={{ email: userEmail }}
                options={{ title: 'Perfil' }}
            />
            <Tab.Screen 
                name='Settings' 
                component={Settings}
                options={{ title: 'Configuración' }}
            />
        </Tab.Navigator>
    );
}