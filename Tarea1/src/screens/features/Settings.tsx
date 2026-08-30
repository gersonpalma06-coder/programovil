import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      <Text style={styles.text}>Opciones de la aplicación</Text>
      
      <Button 
        title="Cerrar Sesión" 
        onPress={() => console.log("Sesión cerrada")} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  }
});