import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/StackNavigator";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "../navigation/TabsNavigator";
import { navigationRef } from "../navigation/NavigationService";

type NestedProps = CompositeScreenProps<
BottomTabScreenProps<TabsParamList, 'HomeTab'>,
NativeStackScreenProps<RootStackParamList>
  >;

export default function Home({ route, navigation }: NestedProps) {
  const userEmail = route.params?.email ?? "Usuario"; 

const handleLogout = () => {
    if (navigationRef.isReady()) {
      navigationRef.reset({
        routes: [
          // Es un arreglo para cual cada objeto representa una pantalla a la que se quiere navegar, en este caso solo queremos ir a la pantalla de login
          {name: 'LoginScreen'}
        ],
        index: 0,
      });
    }
  };

const handleNavigate = () => {
    navigation.navigate('LoginScreen');
  }

 return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido, {userEmail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});