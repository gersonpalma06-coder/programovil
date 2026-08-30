import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/StackNavigator";

type HomeProps =
  NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function Home({ route }: HomeProps) {
  const { email } = route.params;

 return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido, {email}</Text>
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