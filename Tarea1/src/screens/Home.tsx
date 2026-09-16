import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "../navigation/TabsNavigator";
import CustomButton from "../components/CustomButton";
import { navigationRef } from "../navigation/NavigationService";
import { useTheme } from "../contexts/ThemeContext";
import Card from "../components/Card";

type NestedProps = CompositeScreenProps<
  BottomTabScreenProps<TabsParamList, "HomeTab">,
  NativeStackScreenProps<RootStackParamList>
>;

export default function Home({ navigation, route }: NestedProps) {
  
  const { email } = route.params;
  
  const { colors } = useTheme();

  const handleUserSettings = () => {
    navigation.navigate("Settings");
  };

  const handleLogout = () => {
    if (navigationRef.isReady()) {
        navigationRef.reset({
    
            routes: [
                { name: 'LoginScreen' }
            ], 
            index: 0,
        });
    }
  };

  const handleNavigate = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    
    <ScrollView 
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container} 
    >
  
      <Text style={[styles.welcome, { color: colors.text }]}>Bienvenido, {email} </Text>

      <CustomButton
        title="Ir a Preferencias de Usuario"
        onPress={handleUserSettings}
        variant="primary"
      />
      <CustomButton
        title="Cerrar Sesion"
        variant="secondary"
        onPress={handleLogout}
      />
      <CustomButton
        title="Ir atras"
        variant="tertiary"
        onPress={handleNavigate}
      />

      <Text style={[styles.sectionTitle, { color: colors.text }]}>
        Tarjetas
      </Text>
      <Card
        title='Notificaciones'
        icon='notifications'
        description='Revisa tus alertas y mensajes recientes.'
      />
      <Card
        title='Actividad'
        icon='pulse'
        description='Consulta tu historial de actividad reciente.'
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, paddingBottom: 40, alignItems: "center" },
  welcome: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 24,
    marginBottom: 12,
    alignSelf: "flex-start", 
  },
});